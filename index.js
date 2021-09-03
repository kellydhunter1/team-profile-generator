const inquirer = require('inquirer');

// create an array of questions to collect employee information
const employeeInfo = [];
questionnaire = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'team Manager',
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
        name: 'emplyeeID',
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
}

questionnaire()
.then(teamMembers);
