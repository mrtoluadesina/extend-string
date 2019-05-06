var toLower = require('./toLower');

test('Checks that a string is converted to the lower case value', function() {
  var aString = 'I OWN DECAGON';
  expect(aString.toLower()).toMatch(/[a-z\s]{13}/); // using regex as the matcher for the function
});