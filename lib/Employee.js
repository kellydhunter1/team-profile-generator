function Employee(name = '', employeeId, email, officeNumber) {
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
}

Employee.prototype.getEmployeeName = function() {
    return `Employee's name: ${this.name}`;
};

Employee.prototype.getEmployeeId = function() {
    return `${this.name}'s employee ID: ${this.employeeId}`;
};
Employee.prototype.getEmployeeEmail = function() {
    return `${this.name}'s E-mail address: ${this.email}`;
};

Employee.prototype.getEmployeeRole = function() {
    return `${this.name}'s Team Role: ${this.role}`;
};

module.exports = Employee;