const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

// create an array of questions to collect employee information
questionnaire = () => {
    let teamInfo = [];
    return inquirer.prompt([
        {
        type: 'input',
        name: 'manager',
        message: 'Enter full name of the Team Manager (required)',
            validate: name => {
                if(name) {
                return true;
                } else {
                console.log("Please enter team Manager's full name!");
                }
            }
        },
        {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter the Manager employee ID'
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the Manager office number'
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter Manager e-mail address (required)',
            validate: email => {
                if(email) {
                return true;
                } else {
                console.log("Please enter employee's e-mail address!");
                }
            }
        }
// END OF PROMPTS
    ])
    .then(({ manager, employeeId, officeNumber, email }) => {
        this.employee = new Employee(manager, employeeId, officeNumber, email);
        console.table(this.employee);

    });
};

const addTeamMember = teamInfo => {
    // if (!teamInfo.member) {
    //     teamInfo.member = [];
    // }
    console.log(`
        ======================
        Add a New Team Member
        ======================
    `);
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "Please enter team member's full name"
        },
        {
        type: 'input',
        name: 'employeeId',
        message: "Enter team member's employee ID"
        },
        {
        type: 'input',
        name: 'email',
        message: "Enter team members email address"
        },
        {
        type: 'checkbox',
        name: 'memberType',
        message: 'What is the role of the new team member?',
        choices: ['Engineer', 'Intern'] 
        },
        {
        type: 'input',
        name: 'github',
        message: 'Please enter Engineers github username',
        when: ({ memberType }) => {
            if (memberType === 'Engineer') {
                return true;
            } else {
                return false
            }
        }},
        {
        type: 'input',
        name: 'school',
        message: "Please enter Intern's current school",
        when: ({ memberType }) => {
            if (memberType === 'Intern') {
                return true;
            } else {
                return addTeamMember
            }
        }},
        {
        type: 'confirm',
        name: 'confirmAddMember',
        message: 'Would you like to add another team member?',
        default: false
        }])
    .then(teamInfo => {
        // teamInfo.member.push(teamInfo);
        if (teamInfo.confirmAddMember) {
            return addTeamMember(teamInfo);
        } else {
            return console.table(teamInfo);
        }
    });
};


questionnaire()
.then(addTeamMember)
// .then(console.table(teamInfo))
.catch(err => {
    console.log(err);
})

    //         {
    //             type: 'confirm',
    //             name: 'confirmAddMember',
    //             message: 'Would you like to add another team member?',
    //             default: false
    //         }
    //     })
    // .then(teamInfo => {
    //     teamInfo.member.push(teamInfo);
    //     inquirer.prompt()
    //     .then(if(teamInfo.confirmAddTeam) {);
    //     }
    // });