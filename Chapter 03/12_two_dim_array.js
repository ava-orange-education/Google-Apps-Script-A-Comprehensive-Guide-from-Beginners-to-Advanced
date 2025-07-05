function twoDimArrayLength() {
  const warehouseData = [
    ['Item ID', 'Item Name', 'Quantity'],
    ['101', 'Screwdrivers', 150],
    ['102', 'Hammers', 85],
    ['103', 'Wrenches', 200],
  ];

  Logger.log(`Number of rows: ${warehouseData.length}`);
  Logger.log(`Number of columns: ${warehouseData[0].length}`);
}

function loopOver2DArray() {
  const pharmacySalesData = [
    ['Medicine', 'Quantity Sold', 'Revenue'],
    ['Aspirin', 100, 2000],
    ['Paracetamol', 150, 3000],
    ['Ibuprofen', 80, 1600],
  ];

  const bestSellers = [['Medicine', 'Quantity Sold']];

  for (let i = 1; i < pharmacySalesData.length; i++) {
    // Start at 1 to skip headers
    if (pharmacySalesData[i][1] >= 100) {
      // Check if quantity sold is >= 100
      bestSellers.push([pharmacySalesData[i][0], pharmacySalesData[i][1]]);
    }
  }

  Logger.log(bestSellers);
}

const sheetData = [
  ['Product', 'Price'],
  ['Pen', 1.2],
  ['Notebook', 2.5],
];

function logEachRow(row, index) {
  if (index > 0) Logger.log(`Row ${index}: ${row[0]}, ${row[1]}`);
}

function iterateSheetData() {
  sheetData.forEach(logEachRow);
}

function priceWithTax(row, index) {
  return index === 0 ? row : [row[0], row[1] * 1.1];
}

function applyTaxToPrices() {
  const updatedSheetData = sheetData.map(priceWithTax);
  Logger.log(updatedSheetData);
}


function filterExpensiveItems(row) {
  return row[1] > 2;
}

function getExpensiveItems() {
  const expensiveItems = sheetData.filter(filterExpensiveItems);
  Logger.log(expensiveItems);
}

function filterExpensiveItems(row) {
  return row[1] > 2;
}

function getExpensiveItems() {
  const expensiveItems = sheetData.filter(filterExpensiveItems);
  Logger.log(expensiveItems);
}


function manupulate2DArray() {
  const inventory = [
    ['Item', 'Quantity'],
    ['Screws', 100],
    ['Nails', 200],
  ];
  inventory.push(['Bolts', 300]); // Add to the end
  inventory.unshift(['Item ID', '0001']); // Add to the start
  inventory.pop(); // Remove 'Bolts'
  inventory.shift(); // Remove 'Item ID'
  Logger.log(inventory);

  const sliced = inventory.slice(1, 3); // Copies part of the array
  inventory.splice(1, 1, ['Bolts', 300]); // Replaces 'Screws' with 'Bolts'
  delete inventory[2]; // Deletes 'Nails'
  Logger.log(sliced);
  Logger.log(inventory);
}
