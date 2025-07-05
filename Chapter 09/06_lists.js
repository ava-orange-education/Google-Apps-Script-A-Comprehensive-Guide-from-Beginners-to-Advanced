function findList(element) {
  const li = DocumentApp.getActiveDocument()
    .getActiveTab()
    .asDocumentTab()
    .getBody()
    .findElement(DocumentApp.ElementType.LIST_ITEM, element);
  if (null === li) return;
  Logger.log(li.getElement().asListItem().editAsText().getText());
  findList(li);
}
