function onOpen() {
  // onOpen is a reserved word for declaring a trigger
  Logger.log('Someone opened our Google Sheet');

  SpreadsheetApp.getUi()
    .createMenu('My Apps Script Menu')
    .addItem('Randomize colors', 'randomizeCellColors')
    .addToUi();
}

function randomizeCellColors() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange('A1:E20');

  const colors = generateRandomHexColors(
    range.getNumRows(),
    range.getNumColumns()
  );

  range.setBackgrounds(colors);
}

function generateRandomHexColors(numRows, numCols) {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, getRandomColor)
  );
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
