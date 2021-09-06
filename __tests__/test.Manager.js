
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Kelly', 111, 'k@email.com', 69);

    expect(manager.officeNumber).toEqual(expect.any(Number));

    expect(manager.role).toBe('Manager');
    console.log(manager);
});

test('gets manager office number', () => {
    const manager = new Manager(69);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});