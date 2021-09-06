// spread employee object
const Employee = require('./Employee');

function Manager (officeNumber) {
    this.officeNumber = officeNumber;
    this.role = 'employee';
}

Manager.prototype = Object.create(Employee.prototype);

Manager.ptototype.getOfficeNumber = function() {
    return {
        officeNumber: this.officeNumber
    }
};
module.exports = Manager;

// add office number
// role overridden to return 'Manager'
