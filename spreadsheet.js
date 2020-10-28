// Importing libraries used
const { GoogleSpreadsheet } = require('google-spreadsheet');

// Importing Google Service Account credentials
const creds = require('./CG Attendance List.json');

// Specify Google Sheet ID
const doc = new GoogleSpreadsheet('1BoCowKfk7ooHlGERlGTg7Cs6_8_VETVRt4_T7gyXlNw');

// Function to access spreadsheet
async function accessSpreadsheet() {
  // Login with the service account
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });

  // loads document properties and worksheets
  await doc.loadInfo();
  console.log(doc.title);

  // Open specific sheet
  const sheet = doc.sheetsByIndex[0];
  console.log(sheet.title);
  console.log(sheet.rowCount);

  // Values to add
  values = {
    "Name":"PeiYueh",
    "Contact Number":"012-1234567",    
    "Age":3,
    "Gender":"F",
    "Status":"OM",
    "22/2/2020":"🦝"
}

  // Adding a row to the sheet
  sheet.addRow(values)
}

// Call the function
accessSpreadsheet();