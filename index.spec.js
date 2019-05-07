require('./index');

describe('hasVowel Method Test', function() {
  it('Check to see that a string has at least one vowel and returns true, else returns false', function() {
    var oneVowel = 'tolu';
    expect(oneVowel.hasVowels()).toBeTruthy();
  });
})

describe('toUpper Method Test', function() {
  it('Check to know if the string is converted properly to capital letters', function() {
    var thisiS = 'today is not a weekend', capitalize = 'WEEKENDS ARE THE BEST';
    expect(thisiS.toUpper()).toMatch(/[A-Z\s]{13}/); // using regex as the matcher for the function
    expect(capitalize.toUpper()).toMatch('WEEKENDS ')
  });
})