
const Employee = require('./Employee');
// spread employee properties
class Intern extends Employee{
    constructor(school) {
        super(name, employeeId, email);
        this.school = school;
        this.role = 'Intern'
    }

    getSchool() {
       return ` ${ this.school }`;
    }
};

module.exports = Intern;
// school
// getSchool()
// getRole() overridden to return "intern"