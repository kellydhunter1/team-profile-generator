const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Kelly');

    expect(employee.name).toBe('Kelly');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('kelly@email.com');
    expect(employee.role).toBe('employee');

    // expect(employee.inventory).toEqual(expect.arrayContaining([expect.any(object)]));
});