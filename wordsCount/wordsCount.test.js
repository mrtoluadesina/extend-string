var wordsCount = require('./wordsCount');

test('Count the number of words that appear in a string and return the number', function() {
  var aString = 'I want to know how many words are in this string';
  expect(aString.wordsCount()).toBe(11);
})