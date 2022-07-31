// In addition to Employee's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'
const Engineer = require('../lib/Engineer');


test('gets the users github username', () => {
    const user = new Engineer('Bob', 1, 'bob@gmail.com', 'Bobs'); 
    
    expect(user.getGithub()).toEqual('Bobs');
});

test('users role returns as an engineer', () => {
    const user = new Engineer('Bob', 1, 'bob@gmail.com','Bobs');
    
    expect(user.getRole()).toEqual('Engineer');
});
