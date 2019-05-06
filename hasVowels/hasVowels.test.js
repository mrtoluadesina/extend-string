var hasVowels = require('./hasVowels');

test('Checking if a string has vowels in it or not', function() {
  var aString = 'I am a string', noVowel = 'psst';
  expect(aString.hasVowels()).toBeTruthy();
  expect(noVowel.hasVowels()).toBeFalsy();
})