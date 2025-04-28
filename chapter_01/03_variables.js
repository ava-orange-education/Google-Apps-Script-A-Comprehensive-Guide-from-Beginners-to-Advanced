function myFunction() {
  const userName = 'John'; // string
  Logger.log('My name is ' + userName);

  const userAge = 27;
  Logger.log(userAge);

  const isAdult = true;
  Logger.log(isAdult);

  let userOccupation;
  Logger.log(userOccupation);

  userOccupation = 'Google Apps Script Developer'; // Quite the occupation!
  Logger.log(userOccupation);

  userOccupation = null;
  Logger.log(userOccupation);
}
