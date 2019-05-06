String.prototype.words = function() {
  var regex = /[\w]+/gi
  return this.match(regex);
}

module.exports = String.prototype.words;