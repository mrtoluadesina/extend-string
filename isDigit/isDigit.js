String.prototype.isDigit = function() {
  return (/^\d$/).test(this);
}

module.exports = String.prototype.isDigit;