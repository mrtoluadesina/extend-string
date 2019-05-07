var inverseCase = require('./inverseCase');

test('Checks to make sure the string returned is the direct inverse of the case of the inputed string', function() {
  var oneString = 'This strinG'
  expect(oneString.inverseCase()).toBe('tHIS STRINg');
})