function getDocumentDetails() {
  const doc = DocumentApp.create('Example Document');
  Logger.log('Document Name: ' + doc.getName());
  Logger.log('Document ID: ' + doc.getId());
  Logger.log('Document URL: ' + doc.getUrl());
}
