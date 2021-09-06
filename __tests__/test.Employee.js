const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Kelly');

    expect(employee.name).toBe('Kelly');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('kelly@email.com');
    expect(employee.role).toBe('employee');
});

test('gets employee name', () => {
    const employee = new Employee('Kelly');

    expect(employee.getEmployeeName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('gets employee ID', () => {
    const employee = new Employee('Kelly');
    expect(employee.getEmployeeId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('gets employee email', () => {
    const employee = new Employee('Kelly');
    expect(employee.getEmployeeEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
    const employee = new Employee('Kelly');

    expect(employee.getEmployeeRole()).toEqual(expect.stringContaining(employee.role.toString()));
});