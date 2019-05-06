var ucFirst = require('./ucFirst');

test('Convert the first letter in a string to capital letter', function() {
  var ucString = 'i is going to be converted to capital letter';
  expect(ucString.ucFirst()).toMatch(/^[A-Z]/);
  expect(ucString.ucFirst()).toMatch(/^I[a-z]+/);
  expect(ucString.ucFirst()).toMatch('I is going to be converted to capital letter');
})