const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('Graham', 333, 'g@doggy.com','Butler');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.school).toBe('Butler');
    console.log(intern);
});

test('gets interns school', () => {
    const intern = new Intern('Butler');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
})