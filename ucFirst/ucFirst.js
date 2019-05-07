require('../toUpper/toUpper');

String.prototype.ucFirst = function() {
  return this.charAt(0).toUpper() + this.substr(1);
}

module.exports = String.prototype.ucFirst;