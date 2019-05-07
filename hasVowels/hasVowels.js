String.prototype.hasVowels = function() {
  return (/[aeiou]/i).test(this); // the regular expression pattern to use in testing for a vowel.
}

module.exports = String.prototype.hasVowels;