function extractValues() {
  const sheet = getSheet(0); // Retrieve the first sheet
  const lastRow = sheet.getLastRow(); // Get the last row with data
  const lastColumn = sheet.getLastColumn(); // Get the last column with data
  const range = sheet.getRange(1, 1, lastRow, lastColumn); // Define the range
  const values = range.getValues(); // Get all values from the range
  Logger.log(JSON.stringify(values, null, 2)); // Log values in a readable format
}
