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
  var number = this.match(/\d/g), strip = /\s$/, result = '';
  for (var i = 0; i < number.length; i++) {
    if (numberInWords.hasOwnProperty(number[i])) {
      result += numberInWords[number[i]] + ' ';
    }
  }
  return result.replace(strip, '');
}

module.exports = String.prototype.numberWords;