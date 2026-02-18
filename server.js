const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT || process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Google Sheets configuration
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || '16sEiK5j4tVILRLDp39ju_MHediOZjJZvOh7RdKIvx6w';
const SHEET_NAME = process.env.SHEET_NAME || 'Sheet1'; // Default to Sheet1, can be configured in .env

// In-memory cache
let cache = {
  data: null,
  timestamp: null,
  ttl: 5 * 60 * 1000 // 5 minutes in milliseconds
};

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, 'credentials.json'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const client = await auth.getClient();
  return google.sheets({ version: 'v4', auth: client });
}

// Fetch data from Google Sheets with caching
async function fetchSheetData(forceRefresh = false) {
  const now = Date.now();

  // Return cached data if valid and not forcing refresh
  if (!forceRefresh && cache.data && cache.timestamp && (now - cache.timestamp < cache.ttl)) {
    console.log('Returning cached data');
    return cache.data;
  }

  try {
    console.log('Fetching fresh data from Google Sheets');
    const sheets = await getGoogleSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:Z`, // Fetch all columns
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
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    throw error;
  }
}

// API endpoint for compliance pages
app.get('/api/compliance/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

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
    res.json({
      success: true,
      data: complianceData
    });

  } catch (error) {
    console.error('Error in /api/compliance/:slug:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    cache: {
      hasData: !!cache.data,
      age: cache.timestamp ? Date.now() - cache.timestamp : null
    }
  });
});

// Debug endpoint to list available sheets
app.get('/api/debug/sheets', async (req, res) => {
  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const sheetInfo = response.data.sheets.map(sheet => ({
      title: sheet.properties.title,
      sheetId: sheet.properties.sheetId,
      index: sheet.properties.index
    }));

    res.json({
      success: true,
      spreadsheetTitle: response.data.properties.title,
      sheets: sheetInfo,
      configured: {
        spreadsheetId: SPREADSHEET_ID,
        sheetName: SHEET_NAME
      }
    });
  } catch (error) {
    console.error('Error fetching sheet info:', error);
    res.status(500).json({
      error: 'Failed to fetch sheet information',
      message: error.message
    });
  }
});

// Cache refresh endpoint (optional - for manual cache clearing)
app.post('/api/cache/refresh', async (req, res) => {
  try {
    await fetchSheetData(true);
    res.json({
      success: true,
      message: 'Cache refreshed successfully'
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to refresh cache',
      message: error.message
    });
  }
});

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Spreadsheet ID: ${SPREADSHEET_ID}`);
  console.log(`Sheet Name: ${SHEET_NAME}`);
});

module.exports = app;
