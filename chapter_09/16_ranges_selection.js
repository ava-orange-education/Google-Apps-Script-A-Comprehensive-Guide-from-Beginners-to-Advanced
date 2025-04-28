function processSelection() {
  const sel = DocumentApp.getActiveDocument().getSelection();

  if (!sel) return;

  sel.getRangeElements().forEach(rangeEl => {
    const el = rangeEl.getElement();
    Logger.log(el.getType());

    if (!el?.editAsText()) return;

    const txt = el.editAsText();
    Logger.log(txt.getText());
  });
}

function processSelection() {
  const sel = DocumentApp.getActiveDocument().getSelection();

  if (!sel) return;

  sel.getRangeElements().forEach(rangeEl => {
    const el = rangeEl.getElement();
    Logger.log(el.getType());

    if (!el?.editAsText()) return;

    const txt = el.editAsText();
    const isPartial = rangeEl.isPartial();

    const textValue = txt.getText();
    if (!isPartial) Logger.log(textValue);

    const [startOffset, endOffset] = [
      rangeEl.getStartOffset(),
      rangeEl.getEndOffsetInclusive(),
    ];
    Logger.log(textValue.substring(startOffset, endOffset + 1));
  });
}

function insertAtCursor() {
  const cursor = document.getCursor();
  if (cursor) {
    cursor.insertText('Inserted text at cursor.');
  }
}

function moveCursor(from, count = 1) {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getActiveTab().asDocumentTab().getBody();
  const re = body.findText('Emergency Department', from);
  if (null === re) return;
  const pos = doc.newPosition(re.getElement(), re.getStartOffset());
  doc.setCursor(pos);
  Logger.log(`Moved cursor ${count} times`);
  doc.saveAndClose();
  Utilities.sleep(1000);
  moveCursor(re, count + 1);
}
