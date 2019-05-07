require('./index');

describe('hasVowel Method Test', function() {
  it('Check to see that a string has at least one vowel and returns true, else returns false', function() {
    var oneVowel = 'tolu';
    expect(oneVowel.hasVowels()).toBeTruthy();
  });
});

describe('toUpper Method Test', function() {
  it('Check to know if the string is converted properly to capital letters', function() {
    var thisiS = 'today is not a weekend', capitalize = 'WEEKENDS ARE THE BEST';
    expect(thisiS.toUpper()).toMatch(/[A-Z\s]{13}/); // using regex as the matcher for the function
    expect(capitalize.toUpper()).toMatch('WEEKENDS ')
  });
});

describe('toLower Method Test', function() {
  it('Checks that a string is converted to the lower case value', function() {
    var owner = 'I OWN DECAGON';
    expect(owner.toLower()).toMatch(/[a-z\s]{13}/); // using regex as the matcher for the function
  });
});

describe('ucFirst Method Test', function() {
  it('Converts the first letter in a string to capital letter', function() {
    var aString = 'i is going to be converted to capital letter';
    expect(aString.ucFirst()).toMatch(/^[A-Z][a-z\s]+/);
    expect(aString.ucFirst()).toMatch(/^I\s[a-z]+/);
    expect(aString.ucFirst()).toMatch('I is going to be converted to capital letter');
  });
});

describe('isQuestion Method Test', function() {
  it('Checkss and returns true is a string is a question - that is ends with a ?', function() {
    var question = 'How are you?', notAQuestion = 'I am fine';
    expect(question.isQuestion()).toBeTruthy();
    expect(notAQuestion.isQuestion()).toBeFalsy();
  });
});

describe('words Method Test', function() {
  it('Returns individual words in a string', function() {
    var thisWord = 'I want to make sure this comes back as an array';
    expect(thisWord.words()).toEqual(expect.arrayContaining(['I', 'want', 'to', 'make', 'sure', 'this', 'comes', 'back', 'as', 'an', 'array']));
  });
});

describe('wordsCount Method Test', function() {
  it('Counts the number of words that appear in a string and return the number', function() {
    var aString = 'I want to know how many words are in this string';
    expect(aString.wordsCount()).toBe(11);
  });
});

