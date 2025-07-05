function doGet() {
  const returnValue = {
    result: 'OK',
    message: 'Hello world',
  };
  return ContentService.createTextOutput(
    JSON.stringify(returnValue)
  ).setMimeType(ContentService.MimeType.JSON);
}
