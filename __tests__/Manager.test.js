// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'
const Manager = require('../lib/Manager');

test('gets office number', () => {
    const user = new Manager('Linda', 2, 'linda@gmail.com', 8675309);

    expect(user.officeNumber).toBe(8675309);
})

test('gets managers name', () => {
    const user = new Manager('Linda', 2, 'linda@gmail.com', 8675309);

    expect(user.getRole()).toEqual('Manager');
});