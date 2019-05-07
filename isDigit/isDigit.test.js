var isDigit = require('./isDigit');

test('Checks that a number is a digit - only one number - and returns true', function() {
  var trueDigit = '3', 
      falseDigit = '34';
  expect(trueDigit.isDigit()).toBeTruthy();
  expect(falseDigit.isDigit()).toBeFalsy();
});