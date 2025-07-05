function handleObjects() {
  // employee is an object
  const employee = {
    firstName: 'John',
    lastName: 'Doe',
    sayHello() {
      Logger.log('Hi there, my name is ' + this.firstName);
    },
  };

  Logger.log(employee.firstName); // John
  Logger.log(employee.lastName); // Doe
  employee.sayHello(); // Hi there, my name is John
}
