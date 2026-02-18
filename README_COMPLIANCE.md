# A2P 10DLC Compliance Portal

This project includes a dynamic compliance portal that fetches client-specific A2P 10DLC compliance information from Google Sheets and displays it on custom URLs.

## Features

- **Dynamic Routes**: Each client gets a unique URL `/compliance/{slug}`
- **Google Sheets Integration**: All compliance data is managed in a centralized Google Sheet
- **Caching**: 5-minute in-memory cache to reduce API calls
- **Responsive Design**: Mobile-friendly compliance pages
- **Error Handling**: Proper 404 handling for invalid slugs

## Setup

### Prerequisites

- Node.js 14+ installed
- Google Service Account credentials (`credentials.json`)
- Google Sheet with compliance data

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (optional, default values work):
```bash
cp .env.example .env
```

3. Ensure `credentials.json` is in the root directory

### Google Sheets Structure

Your Google Sheet named **"Client Website Compliance Data"** should have these columns:

| Column Name       | Description                           | Required |
|-------------------|---------------------------------------|----------|
| Slug              | URL-friendly identifier (e.g., "acme-trucking") | Yes |
| Company_Name      | Full company name                     | Yes      |
| Physical_Address  | Complete mailing address              | Yes      |
| Business_Email    | Support email address                 | Yes      |
| Business_Phone    | Support phone number                  | Yes      |
| Opt_In_Method     | How users consent (e.g., "website signup") | Yes |

**Example Row:**
```
Slug: acme-trucking
Company_Name: ACME Trucking LLC
Physical_Address: 123 Main St, Suite 100, Dallas, TX 75001
Business_Email: support@acmetrucking.com
Business_Phone: (555) 123-4567
Opt_In_Method: website signup form
```

## Running the Application

### Development Mode (Both servers)
```bash
npm run dev
```
This runs both the Express backend (port 5000) and React frontend (port 3000) concurrently.

### Backend Only
```bash
npm run server
```

### Frontend Only
```bash
npm start
```

## API Endpoints

### Get Compliance Data
```
GET /api/compliance/:slug
```

**Example:**
```bash
curl http://localhost:5000/api/compliance/acme-trucking
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "Slug": "acme-trucking",
    "Company_Name": "ACME Trucking LLC",
    "Physical_Address": "123 Main St, Suite 100, Dallas, TX 75001",
    "Business_Email": "support@acmetrucking.com",
    "Business_Phone": "(555) 123-4567",
    "Opt_In_Method": "website signup form"
  }
}
```

**Error Response (404):**
```json
{
  "error": "Compliance page not found",
  "message": "No compliance data found for slug: acme-trucking"
}
```

### Health Check
```
GET /api/health
```

### Refresh Cache
```
POST /api/cache/refresh
```

## Usage

1. Add a new row in your Google Sheet with the client's compliance data
2. Set a unique `Slug` value (lowercase, hyphenated)
3. The compliance page will be immediately available at:
   - Development: `http://localhost:3000/compliance/{slug}`
   - Production: `https://yourdomain.com/compliance/{slug}`

## Production Deployment

1. Build the React app:
```bash
npm run build
```

2. Set environment variable:
```bash
export NODE_ENV=production
```

3. Start the server:
```bash
npm run server
```

The server will serve both the API and the built React app.

## File Structure

```
├── server.js                       # Express backend with Google Sheets integration
├── credentials.json                # Google Service Account credentials (keep secret!)
├── src/
│   ├── App.jsx                     # React Router configuration
│   ├── CompliancePage.css          # Compliance page styles
│   ├── components/
│   │   └── CompliancePage.jsx      # Compliance page component
│   └── templates/
│       └── compliance.html         # Original template (reference)
└── package.json                    # Dependencies and scripts
```

## Security Notes

- **Never commit `credentials.json`** - it's already in `.gitignore`
- The Google Service Account only has read-only access to the sheet
- Credentials are only used on the backend, never exposed to the browser
- Consider adding rate limiting for production

## Troubleshooting

### "Failed to fetch compliance data"
- Ensure the backend server is running (`npm run server`)
- Check that `credentials.json` exists and is valid
- Verify the Google Sheet ID in `server.js` matches your sheet

### "Compliance page not found"
- Check that the slug exists in your Google Sheet
- Slugs are case-insensitive but must match exactly
- Try refreshing the cache: `POST http://localhost:5000/api/cache/refresh`

### Port already in use
- Change the PORT in `.env` file
- Kill the process using port 5000: `lsof -ti:5000 | xargs kill -9` (Mac/Linux)

## Support

For issues or questions, contact the FullScope Services technical team.
