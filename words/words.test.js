var words = require('./words');

test('Returns individual words in a string', function() {
  var thisWord = 'I want to make sure this comes back as an array';
  expect(thisWord.words()).toEqual(expect.arrayContaining(["I", "want", "to", "make", "sure", "this", "comes", "back", "as", "an", "array"]));
});