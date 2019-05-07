var toUpper = require('../toUpper/toUpper');
var toLower = require('../toLower/toLower');

String.prototype.alternatingCase = function() {
  var newString = '';
  for (var i = 0; i < this.length; i++) {
    // to alternate case, we make use of even and odds (even will be numbers divisible by 2).
    (i % 2 === 0) ? newString += this[i].toLower() : newString += this[i].toUpper();
  }
  return newString;
}

module.exports = String.prototype.alternatingCase;