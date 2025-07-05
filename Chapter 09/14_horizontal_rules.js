function addLists() {
  const body = DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .getBody();

  addBulletedList();
  body.appendHorizontalRule();
  addNumberedList();
}
