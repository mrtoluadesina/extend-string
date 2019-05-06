String.prototype.fromCurrency = function() {
  return Number((this).replace(/\,/g, '')).toFixed(2);
}

module.exports = String.prototype.fromCurrency;