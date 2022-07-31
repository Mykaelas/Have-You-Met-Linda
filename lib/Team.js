const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Team {
    constructor() {
        this.teamMembers = [];
    }

    teamInformation() {
        inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'What is your managers name?',
            validate: nameInput => {
                if(nameInput) {
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
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid id');
                    return false;
                }
            }
        })
    }

}