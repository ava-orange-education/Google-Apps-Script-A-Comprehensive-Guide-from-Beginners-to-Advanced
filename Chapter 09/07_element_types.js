function printElementTypes() {
  const body = DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .getBody();
  const numChildren = body.getNumChildren();
  const types = new Set();
  for (let i = 0; i < numChildren; i++) {
    types.add(body.getChild(i).getType());
  }
  types.forEach(Logger.log);
}
