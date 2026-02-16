// Google Apps Script backend template

function doPost(e) {
  // Parse the incoming JSON request
  var data = JSON.parse(e.postData.contents);
  
  // Validate the incoming data
  if (!validateData(data)) {
    return ContentService.createTextOutput(JSON.stringify({
      error: 'Invalid data'
    })).setMimeType(ContentService.MIME_TYPE_JSON);
  }
  
  // Log attendance data to Google Sheet
  var result = logAttendance(data.studentName, data.sessionQRCode, data.timestamp);
  
  // Return success or error response
  if (result) {
    return ContentService.createTextOutput(JSON.stringify({
      success: 'Attendance logged successfully'
    })).setMimeType(ContentService.MIME_TYPE_JSON);
  } else {
    return ContentService.createTextOutput(JSON.stringify({
      error: 'Failed to log attendance'
    })).setMimeType(ContentService.MIME_TYPE_JSON);
  }
}

function logAttendance(studentName, sessionQRCode, timestamp) {
  var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet(); // Change YOUR_SHEET_ID to your actual Sheet ID
  sheet.appendRow([studentName, sessionQRCode, timestamp]);
  return true;
}

function validateData(data) {
  return data.studentName && data.sessionQRCode && data.timestamp;
}