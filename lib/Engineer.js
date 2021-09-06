const Employee = require('./Employee');

// spread employee properties
class Engineer extends Employee{
    constructor(github) {
        super(name, employeeId, email);
        this.github = github;
        this.role = 'Engineer'
    }

    getGithub() {
        return {
            github: this.github
        }
    }
};

module.exports = Engineer;
// github info
// getGithub()
// getRole overriden to return Engineer