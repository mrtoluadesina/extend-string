String.prototype.words = function() {
  return this.match(/[\w]+/gi);
}

module.exports = String.prototype.words;