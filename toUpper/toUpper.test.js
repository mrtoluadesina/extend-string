var toUpper = require('./toUpper');

test('Check to know if the string is converted properly to capital letters', function() {
  var aString = 'i am a string';
  expect(aString.toUpper()).toMatch(/[A-Z\s]{13}/);
});