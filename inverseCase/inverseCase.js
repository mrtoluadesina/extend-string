var toUpper = require('../toUpper/toUpper');
var toLower = require('../toLower/toLower');

String.prototype.inverseCase = function() {
  var newString = '', regex = /[a-z]/;
  for (var i = 0; i < this.length; i++) {
    if (regex.test(this[i])) {
      newString += this[i].toUpper();
    } else {
      newString += this[i].toLower();
    }
  }
  return newString;
}

module.exports = String.prototype.inverseCase;