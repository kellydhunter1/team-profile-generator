const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Kelly', 9800, 'kelly@email.com', 'employee');

    expect(employee.name).toBe('Kelly');
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.email).toBe('kelly@email.com');
    expect(employee.role).toBe('employee');

    console.log(employee);
});

test('gets employee name', () => {
    const employee = new Employee('Kelly', 9800, 'kelly@email.com', 'employee');

    expect(employee.getEmployeeName()).toEqual(expect.stringContaining(employee.name));
});

test('gets employee ID', () => {
    const employee = new Employee('Kelly', 9800, 'kelly@email.com', 'employee');
    expect(employee.getEmployeeId()).toEqual(expect.stringContaining(employee.employeeId.toString()));
});

test('gets employee email', () => {
    const employee = new Employee('Kelly', 9800, 'kelly@email.com', 'employee');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('gets employee role', () => {
    const employee = new Employee('Kelly', 9800, 'kelly@email.com', 'employee');

    expect(employee.getEmployeeRole()).toEqual(expect.stringContaining(employee.role));
});