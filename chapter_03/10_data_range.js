function extractValues() {
  const sheet = getSheet(0); // Retrieve the first sheet
  const range = sheet.getDataRange(); // Automatically get the data range
  const values = range.getValues(); // Get values from the range
  Logger.log(JSON.stringify(values, null, 2)); // Log values
}
