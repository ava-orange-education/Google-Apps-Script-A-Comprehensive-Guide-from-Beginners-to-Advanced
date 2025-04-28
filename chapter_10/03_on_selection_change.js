function onSelectionChange(e) {
  const { range } = e;
  const wsName = range.getSheet().getName();
  const addr = range.getA1Notation();
  SpreadsheetApp.getActive()
    .getSheetByName('Selection')
    .getRange('A2')
    .setValue(`${wsName}!${addr}`);
}
