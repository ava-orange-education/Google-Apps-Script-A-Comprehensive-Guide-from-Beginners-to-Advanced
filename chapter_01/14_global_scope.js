// Global Scope
const USER = 'Jane';

function printUserName() {
  Logger.log("The user's name is " + USER);
  // Output: The user's name is Jane
}

function greetUser() {
  Logger.log('Hello ' + USER + ', how are you today?');
  // Output: Hello Jane, how are you today?
}

// Function Scope
function printUserName() {
  const user = 'Jane';
  Logger.log("The user's name is " + user);
  // Output: The user's name is Jane
}

function greetUser() {
  Logger.log('Hello ' + user + ', how are you today?');
  // Output: ReferenceError: user is not defined
}

// Block Scope
const AGE = 23;
const NAME = 'Jane';

function isAdult() {
  const response = "We don't know yet";
  if (AGE < 18) {
    const response = NAME + ' is not an adult';
    Logger.log(response);
  } else {
    const response = NAME + ' is an adult';
    Logger.log(response); // Jane is an adult
  }
  Logger.log(response); // We don't know yet
}
