function extractValues() {
  const sheet = getSheet(0); // Retrieve the first sheet
  const range = sheet.getDataRange(); // Automatically get the data range
  const values = range.getDisplayValues(); // Get display values from the range
  Logger.log(range.getA1Notation()); // Log the A1 notation of the range, e.g. 'A1:F9'
  Logger.log(JSON.stringify(values, null, 2)); // Log values
}
