var numberInWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
}
String.prototype.numberWords = function() {
  var number = this.match(/\d/g),
      result = '';
  
  // Check if the inputed value is a number or a string
  if (!((/\d/g).test(this))) return 'Not a Number'; 

  // loop through the numberInWords Object to get the word equivalent of a number
  for (var i = 0; i < number.length; i++) {
      result += numberInWords[number[i]] + ' ';
  }
  return result.replace(/\s$/, '');
}

module.exports = String.prototype.numberWords;