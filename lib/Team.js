const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const Template = require('../src/Template');
const internal = require('stream');
const Card = require('../src/CardTemplate');



class Team {
    constructor() {
        this.teamMembers = [];
        this.htmlObject = document.createElement('div');
        this.htmlObject.innerHTML = Template();
    }

    managerInformation() {
        inquirer.prompt({
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
        })
        .then(function (userInput) {
            createCard(userInput);
            getRole();
        })
        // call getRole() to initiate the next step
    };
    
    addAnotherEmployee() {
        inquirer.prompt({
            type:'confirm',
            name: 'add',
            message: "Would you like to add another employee?",
            validate: add => {
                if (add === true) {
                    getRole();
                } else {
                    generateHTML();
                }
            }
        })
    }
    getRole() {
        inquirer.prompt({
            type: 'checkbox',
            name: 'role',
            message: 'What is the role of this employee?',
            choices: ['engineer', 'intern'],
            // if ('engineer', engineerInformation())
            // else {
            //     (internInformation());
            // }
        })
        // also need to add in a would you like to add another employee before this? different function mayeb? 
    }

    engineerInformation() {
        inquirer.prompt({
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
        })
    }

    internInformation() {
        inquirer.prompt({
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
        })
    }


    createCard(input) {
       let cardHTML = document.createElement('div');
       cardHTML.innerHTML = Card(input);
       // cardInformation goes inside of template 
       this.htmlObject.getElementByID('cardContainer').appendChild(cardHTML);
         
    }

    generateHTML() {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                return console.log(err);
            }
        })
    }

}