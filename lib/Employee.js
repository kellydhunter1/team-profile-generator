class Employee {
constructor(name, employeeId, email) {
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.role = 'employee'
    }


getEmployeeName() {
    return `Employee's name: ${this.name}`;
};

getEmployeeId() {
    return `${this.name}'s employee ID: ${this.employeeId}`;
};

getEmail() {
    return `${this.name}'s E-mail address: ${this.email}`;
};

getEmployeeRole() {
    return `${this.name}'s Team Role: ${this.role}`;
};
};

module.exports = Employee;