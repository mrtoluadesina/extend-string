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
  var regex = /\d/g, 
      number = this.match(regex), 
      strip = /\s$/, 
      result = '';
      
  if (regex.test(this)) {
    for (var i = 0; i < number.length; i++) {
      if (numberInWords.hasOwnProperty(number[i])) {
        result += numberInWords[number[i]] + ' ';
      } 
    }
    return result.replace(strip, '');
  } else {
    return 'Not a Number';
  }
}

module.exports = String.prototype.numberWords;