# MapleLine Waitlist - Google Sheets Integration

This script connects the **Join the Waitlist** form to your Google Sheet.

## Your Sheet
https://docs.google.com/spreadsheets/d/1rlgTse2qdyJvyUx9lEn9smujCHCZL-e2FHFdCvE1MSY/edit

## Setup Steps

### 1. Add the script to your sheet
1. Open the sheet link above
2. Go to **Extensions** → **Apps Script**
3. Replace any existing code with the contents of `Code.gs`

### 2. Add column headers
In Row 1 of your sheet, add: `Timestamp` | `Clinic Name` | `Role` | `Email` | `Call Volume` | `Pain Point` | `Source`

### 3. Deploy as web app
1. Click **Deploy** → **New deployment**
2. Click the gear icon → **Web app**
3. Set **Execute as**: Me
4. Set **Who has access**: Anyone
5. Click **Deploy**
6. Copy the **Web app URL** (ends with `/exec`)

### 4. Add URL to your project
Create a `.env` file in the project root:
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
```
Replace with your actual deployment URL.

Restart the dev server after adding the env variable.

## Troubleshooting: Data not appearing

1. **Redeploy the script** – After any code changes, go to Deploy > Manage deployments > Edit (pencil) > Version: New version > Deploy
2. **Check column headers** – Row 1 must have: `Timestamp` | `Clinic Name` | `Role` | `Email` | `Call Volume` | `Pain Point` | `Source`
3. **Use the correct sheet** – In Apps Script, go to Extensions > Apps Script from your sheet (not a standalone script) so it's bound to the right spreadsheet
