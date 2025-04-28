// An object containing arrays
const employee = {
  firstName: 'John',
  lastName: 'Doe',
  sayHello() {
    Logger.log('Hi there, my name is ' + this.firstName);
  },
  hobbies: ['skiing', 'chess', 'cooking'],
  address: {
    street: '123 Main Street',
    city: 'Anytown',
    state: 'CA',
    zipCode: '91234',
    country: 'USA',
  },
};

// An array containing objects
const ar = [
  {
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    firstName: 'Peter',
    lastName: 'Parker',
  },
  {
    firstName: 'Mary',
    lastName: 'Jane Watson',
  },
  {
    firstName: 'Bruce',
    lastName: 'Wayne',
  },
];
