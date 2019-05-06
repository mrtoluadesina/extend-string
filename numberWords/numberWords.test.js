var numberWords = require('./numberWords');

test('Return the number equivalent of a digit as a string', function() {
  var aDigit = '325', anotherDigit = '4', noDigit = 'decagon';
  expect(aDigit.numberWords()).toBe('three two five');
  expect(anotherDigit.numberWords()).toBe('four'); 
  expect(noDigit.numberWords()).toBe('Not a Number'); 
});