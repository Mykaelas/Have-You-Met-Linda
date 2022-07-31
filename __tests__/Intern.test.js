// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'
const Intern = require('../lib/Intern');

test('checks if the person is an intern', () => {
    const user = new Intern('Jim', 3, 'jim@gmail.com','Harvard');
   
    expect(user.getRole()).toEqual('Intern');

});

test(' gets the interns school name', () => {
    const user = new Intern('Jim', 3, 'jim@gmail.com', 'Harvard');

    expect(user.school).toBe('Harvard');
});