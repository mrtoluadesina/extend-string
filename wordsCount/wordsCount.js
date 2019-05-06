var words = require('../words/words');

String.prototype.wordsCount = function() {
  return this.words().length;
}

module.exports = String.prototype.wordsCount;