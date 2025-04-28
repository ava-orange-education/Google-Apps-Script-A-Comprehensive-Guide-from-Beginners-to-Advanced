function createHeaderFooter() {
  const header = document.getTabs()[0].asDocumentTab().getHeader();
  header.appendParagraph('This is the document header.');
  const footer = document.getTabs()[0].asDocumentTab().getFooter();
  footer.appendParagraph('This is the document footer.');
}
