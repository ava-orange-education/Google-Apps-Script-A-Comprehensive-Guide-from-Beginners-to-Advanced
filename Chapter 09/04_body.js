function getBody() {
  const body = DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .getBody();
  return body;
}

function replacePlaceholder() {
  const placeholder = '\\[.*department.*\\]';
  const value = 'Emergency Department';
  const body = DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .getBody();
  body.replaceText(placeholder, value);
}
