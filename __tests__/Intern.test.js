const Intern = require('../lib/Intern');

test('creates an intern', () => {
  const i = new Intern('Dave', 4, 'd@example.com', 'MIT');
  expect(i.school).toBe('MIT');
  expect(i.getRole()).toBe('Intern');
});
