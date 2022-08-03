const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const [TemplateTop, TemplateBottom] = require('../src/Template');
const [ManagerCard, EngineerCard, InternCard] = require('../src/CardTemplate');



 
class Team {
    constructor() {
        this.teamMembers = [];
        this.finalHTML = TemplateTop();
    }

    managerInformation() {
        inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid response!')
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their id?',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please enter a valid id')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is the office number?',
            validate: numberInput => {
                if (isNaN(numberInput)) {
                    console.log('Please enter a valid phone number')
                    return false;
                } else {
                    return true;
                }
            }
        }])
        .then((userInput) => {
            this.createManagerCard(userInput);
            this.addAnotherEmployee();
        });
    }
    
    addAnotherEmployee() {
        inquirer.prompt({
            type:'confirm',
            name: 'add',
            message: "Would you like to add another employee?"})
        .then(answer => {
            if (answer.add) {
                this.getRole();
            } else {
                this.generateHTML();
            }
        });
    }
    
    getRole() {
        inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: 'What is the role of this employee?',
            choices: ['engineer', 'intern']}])
        .then((answer) => {
            if (answer.role === 'engineer') {
                this.engineerInformation();
            } else {
                this.internInformation();
            }
        })
    }

    engineerInformation() {
        inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their id?',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please enter a valid id')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github name?'
        }])
        .then((userInput) => {
            this.createEngineerCard(userInput);
            this.addAnotherEmployee();
        });
    }

    internInformation() {
        inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their id?',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('Please enter a valid id')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school is the intern currently studying at?'
        }])
        .then((userInput) => {
            this.createInternCard(userInput);
            this.addAnotherEmployee();
        });
    }


    createManagerCard(input) {
        this.finalHTML = this.finalHTML + ManagerCard(input);
    
    }
    createInternCard(input) {
        this.finalHTML = this.finalHTML + InternCard(input);
    }

    createEngineerCard(input) {
        this.finalHTML = this.finalHTML + EngineerCard(input);
    }



    generateHTML() {
        fs.writeFile("./dist/Output.html", this.finalHTML + TemplateBottom(), (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Your Team Generator is ready!");
        })
    }

}

module.exports = Team;