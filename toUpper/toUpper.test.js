var toUpper = require('./toUpper');

test('Check to know if the string is converted properly to capital letters', function() {
  var aString = 'i am a string', capitalString = 'A CAPITAL';
  expect(aString.toUpper()).toMatch(/[A-Z\s]{13}/); // using regex as the matcher for the function
  expect(capitalString.toUpper()).toMatch('A CAPITAL')
});