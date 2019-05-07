String.prototype.fromCurrency = function() {
  // first I perform a replace on the currency string to remove all commas(,).
  // Then make it a number and then add decimal path (2)
  
  return Number((this).replace(/\,/g, '')).toFixed(2);
}

module.exports = String.prototype.fromCurrency;