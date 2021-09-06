const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Kam', 222, 'k@email.com','cutegirl124232');

    expect(engineer.github).toBe('kellydhunter1');

    console.log(engineer);
})