/**
 * MapleLine Waitlist - Google Apps Script
 *
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1rlgTse2qdyJvyUx9lEn9smujCHCZL-e2FHFdCvE1MSY/edit
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click Deploy > New deployment
 * 5. Select type: Web app
 * 6. Description: "MapleLine Waitlist Form"
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. Click Deploy, then copy the Web app URL
 * 10. Create .env in project root with: VITE_GOOGLE_SCRIPT_URL=<your-url>
 *
 * SHEET SETUP:
 * Add these column headers in Row 1: Timestamp | Clinic Name | Role | Email | Call Volume | Pain Point | Source
 */

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ message: "MapleLine Waitlist - use POST to submit" })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No post data received");
    }
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const row = [
      data.timestamp || new Date().toISOString(),
      data.clinicName || "",
      data.role || "",
      data.email || "",
      data.callVolume || "",
      data.painPoint || "",
      data.source || "waitlist",
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", message: "Added to waitlist" })
    )
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: error.toString() })
    )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
