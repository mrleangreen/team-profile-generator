const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
  const e = new Engineer('Carol', 3, 'c@example.com', 'carolhub');
  expect(e.github).toBe('carolhub');
  expect(e.getRole()).toBe('Engineer');
});
