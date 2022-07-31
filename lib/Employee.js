// This is the Employee parent class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //Returns the name of the employee
    getName() {
       return `${this.name}`; 
    }
    //Returns the ID of the employee
    getId() {
        return this.id;
    }
    // Returns the email address of the employee
    getEmail() {
        return `${this.email}`; 
    }
    // Returns the default role of Employee to the user
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;