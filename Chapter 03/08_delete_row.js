function removeAnalysts() {
  const sheet = getSheet(0);
  const numRows = sheet.getLastRow();
  const professionColumn = 4;
  for (let i = 1; i <= numRows; i++) {
    const profession = sheet.getRange(i, professionColumn).getValue();
    if (profession.includes('Analyst')) sheet.deleteRow(i);
  }
}
