const Employee = require('../lib/Employee');

test('creates an employee', () => {
  const e = new Employee('Alice', 1, 'a@example.com');
  expect(e.name).toBe('Alice');
  expect(e.id).toBe(1);
  expect(e.email).toBe('a@example.com');
});
