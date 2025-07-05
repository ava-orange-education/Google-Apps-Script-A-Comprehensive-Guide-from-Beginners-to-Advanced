function insertTable() {
  const p = SlidesApp.getActivePresentation();
  const newSlide = p.appendSlide(SlidesApp.PredefinedLayout.TITLE_ONLY);
  newSlide.getShapes()[0].getText().setText('Apps Script-Generated Table');

  const tableData = [
    ['Header 1', 'Header 2', 'Header 3', 'Header 4'],
    ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3', 'Row 1 Col 4'],
    ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3', 'Row 2 Col 4'],
    ['Row 3 Col 1', 'Row 3 Col 2', 'Row 3 Col 3', 'Row 3 Col 4'],
    ['Row 4 Col 1', 'Row 4 Col 2', 'Row 4 Col 3', 'Row 4 Col 4'],
    ['Row 5 Col 1', 'Row 5 Col 2', 'Row 5 Col 3', 'Row 5 Col 4'],
  ];

  // Create a table in the slide with the specified number of rows and columns
  const table = newSlide.insertTable(tableData.length, tableData[0].length);

  // Loop through the 2D array and set the text for each cell in the table
  tableData.forEach((row, rowIndex) => {
    row.forEach((cellText, colIndex) => {
      const cell = table.getCell(rowIndex, colIndex);
      cell.getText().setText(cellText);
      if (rowIndex === 0) cell.getText().getTextStyle().setBold(true);
    });
  });
}

function insertColumnsRows() {
  const p = SlidesApp.getActivePresentation();
  const slides = p.getSlides();
  const lastSlide = slides[slides.length - 1];
  const table = lastSlide.getTables()[0];

  let numCols = table.getNumColumns();
  let numRows = table.getNumRows();

  table.insertColumn(numCols);
  numCols++;

  const col = table.getColumn(numCols - 1);
  for (let i = 0; i < numRows; i++) {
    const textRange = col.getCell(i).getText();
    if (i === 0) {
      textRange.setText(`Header ${numCols}`);
      continue;
    }
    textRange.setText(`Row ${i} Col ${numCols}`);
  }

  table.insertRow(numRows);
  numRows++;

  const row = table.getRow(numRows - 1);
  for (let i = 0; i < numCols; i++) {
    const textRange = row.getCell(i).getText();
    textRange.setText(`Row ${numRows - 1} Col ${i + 1}`);
  }
}
