const Manager = require('../lib/Manager');

test('creates a manager', () => {
  const m = new Manager('Bob', 2, 'b@example.com', 100);
  expect(m.officeNumber).toBe(100);
  expect(m.getRole()).toBe('Manager');
});
