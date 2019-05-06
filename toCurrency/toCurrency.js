String.prototype.toCurrency = function() {
  return Number(this).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

module.exports = String.prototype.toCurrency;