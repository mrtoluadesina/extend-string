String.prototype.hasVowels = function() {
  var regex = /[aeiou]/i; // the regular expression pattern to use in testing for a vowel.
  return regex.test(this);
}