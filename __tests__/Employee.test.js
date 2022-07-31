
const Employee = require('../lib/Employee');


test('creates a new employee', () => {
    const user = new Employee('Bob', 1, 'bob@gmail.com');

    expect(user.getName());
    expect(user.getName()).toBe('Bob');
});

test('gets employees ID number', () => {
    const user = new Employee('Bob', 1, 'bob@gmail.com');
    
    expect(user.getId()).toBe(1);
});

test('gets employees email', () => {
    const user = new Employee('Bob', 1, 'bob@gmail.com');
    
    expect(user.getEmail()).toBe('bob@gmail.com');
});

// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// The other three classes will extend Employee.