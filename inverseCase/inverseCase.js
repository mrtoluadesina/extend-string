var toUpper = require('../toUpper/toUpper');
var toLower = require('../toLower/toLower');

String.prototype.inverseCase = function() {
  var newString = ''; 
  for (var i = 0; i < this.length; i++) {
    // Here we test each iteration of the string and then if it is lowercase we make it uppercase and vice versa
    (/[a-z]/).test(this[i]) ? newString += this[i].toUpper() : newString += this[i].toLower();
  }
  return newString;
}

module.exports = String.prototype.inverseCase;