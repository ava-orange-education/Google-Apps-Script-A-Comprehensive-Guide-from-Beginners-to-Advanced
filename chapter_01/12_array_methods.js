function manipulateArrays() {
  const fruits = ['apple', 'banana', 'cherry'];
  const removedFruit = fruits.pop();
  // fruits is now ['apple', 'banana']
  // removedFruit is 'cherry'

  const fruits = ['apple', 'banana', 'cherry'];
  const firstFruit = fruits.shift();
  // fruits will be ['banana', 'cherry']
  // firstFruit is 'apple'

  const fruits = ['banana', 'cherry'];
  const newLength = fruits.unshift('apple');
  // fruits is now ['apple', 'banana', 'cherry']
  // newLength becomes 3

  const spreadsheetData = [
    ['First Name', 'Last Name', 'Age'],
    ['John', 'Doe', 24],
    ['Jane', 'Doe', 19],
  ];
  Logger.log(spreadsheetData[0][0]); // output: 'First Name'
  Logger.log(spreadsheetData[1][2]); // output: 24

  for (let i = 0; i < spreadsheetData.length; i++) {
    for (let j = 0; j < spreadsheetData[i].length; j++) {
      Logger.log(spreadsheetData[i][j]);
    }
  }
}
