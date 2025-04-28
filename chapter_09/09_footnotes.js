function modifyFootnote() {
  const footnotes = DocumentApp.getActiveDocument()
    .getTabs()[0]
    .asDocumentTab()
    .getFootnotes();

  footnotes.forEach((note, i) =>
    note
      .asFootnote()
      .getFootnoteContents()
      .setText(
        `Note ${i + 1}: ${note.asFootnote().getFootnoteContents().getText()}`
      )
  );
}

function removeAllFootNotes() {
  const footnotes = DocumentApp.getActiveDocument()
    .getTabs()[0]
    .asDocumentTab()
    .getFootnotes();
  footnotes.forEach(note => note.removeFromParent());
}

function logoutFootNotes() {
  const footnotes = DocumentApp.getActiveDocument()
    .getTabs()[0]
    .asDocumentTab()
    .getFootnotes();
  footnotes.forEach(footnote =>
    Logger.log(footnote.getFootnoteContents().getText())
  );
}
