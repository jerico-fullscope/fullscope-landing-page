const { google } = require('googleapis');
const path = require('path');

// Google Sheets configuration
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || '16sEiK5j4tVILRLDp39ju_MHediOZjJZvOh7RdKIvx6w';
const SHEET_NAME = process.env.SHEET_NAME || 'Client Data';

// In-memory cache (will persist during function warm state)
let cache = {
  data: null,
  timestamp: null,
  ttl: 5 * 60 * 1000 // 5 minutes
};

async function getGoogleSheetsClient() {
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}');

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
}

async function fetchSheetData(forceRefresh = false) {
  const now = Date.now();

  // Return cached data if valid
  if (!forceRefresh && cache.data && cache.timestamp && (now - cache.timestamp < cache.ttl)) {
    console.log('Returning cached data');
    return cache.data;
  }

  console.log('Fetching fresh data from Google Sheets');
  const sheets = await getGoogleSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAME}!A:Z`,
  });

  const rows = response.data.values;

  if (!rows || rows.length === 0) {
    throw new Error('No data found in sheet');
  }

  // Parse headers and rows
  const headers = rows[0];
  const data = rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] || '';
    });
    return obj;
  });

  // Update cache
  cache.data = data;
  cache.timestamp = now;

  return data;
}

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug } = req.query;

    if (!slug) {
      return res.status(400).json({ error: 'Slug parameter is required' });
    }

    // Fetch data (will use cache if available)
    const data = await fetchSheetData();

    // Find matching row by slug
    const complianceData = data.find(row =>
      row.Slug && row.Slug.toLowerCase() === slug.toLowerCase()
    );

    if (!complianceData) {
      return res.status(404).json({
        error: 'Compliance page not found',
        message: `No compliance data found for slug: ${slug}`
      });
    }

    // Return the compliance data
    return res.status(200).json({
      success: true,
      data: complianceData
    });

  } catch (error) {
    console.error('Error in /api/compliance/[slug]:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
};
