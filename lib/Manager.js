// spread employee object
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, employeeId, email);
// add office number
    this.officeNumber = officeNumber;
    // role overridden to return 'Manager'
    this.role = 'Manager';
}

getOfficeNumber() {
    return {
        officeNumber: this.officeNumber
    }
}
};

module.exports = Manager;


