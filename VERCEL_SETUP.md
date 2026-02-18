# Vercel Deployment Setup for Compliance Portal

## Prerequisites
- Vercel account connected to your GitHub repository
- Google Service Account credentials (`credentials.json`)

## Step 1: Add Environment Variables to Vercel

Go to your Vercel project settings → Environment Variables and add:

### SPREADSHEET_ID
```
16sEiK5j4tVILRLDp39ju_MHediOZjJZvOh7RdKIvx6w
```

### SHEET_NAME
```
Client Data
```

### GOOGLE_CREDENTIALS
Copy the entire contents of your `credentials.json` file and paste it as a **single line** JSON string.

**To convert to single line:**
```bash
cat credentials.json | jq -c
```

Or manually: Remove all line breaks from the JSON so it's one continuous string like:
```
{"type":"service_account","project_id":"your-project",...}
```

**Important:** Make sure it's all on one line with no line breaks!

## Step 2: Deploy

Once environment variables are set, push your code:

```bash
git add .
git commit -m "Add Vercel serverless function for compliance API"
git push
```

Vercel will automatically:
1. Build your React app
2. Deploy the serverless function at `/api/compliance/[slug]`
3. Serve everything from a single URL

## Step 3: Test

Once deployed, test your compliance pages:

```
https://your-app.vercel.app/compliance/test-slug
```

## Architecture

### Development Mode
- Backend: `server.js` on `localhost:5000`
- Frontend: React dev server on `localhost:3000`
- Run with: `npm run dev`

### Production Mode (Vercel)
- Backend: Serverless function at `/api/compliance/[slug]`
- Frontend: Static React app served from root
- Single unified deployment, no separate servers needed

## Troubleshooting

### "Unexpected token '<'" Error
This means the API isn't responding. Check:
1. Environment variables are set in Vercel
2. `GOOGLE_CREDENTIALS` is valid JSON on one line
3. Check Vercel function logs for errors

### "No data found in sheet"
1. Verify `SHEET_NAME` matches your Google Sheet tab name exactly
2. Check that service account has access to the spreadsheet
3. Verify data exists in the sheet

### 404 Errors
1. Make sure you're using the correct slug from your sheet
2. Slugs are case-insensitive
3. Check that the "Slug" column exists in your sheet
