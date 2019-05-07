String.prototype.isQuestion = function() {
  var regex = /.+\?$/;
  return regex.test(this);
}

module.exports = String.prototype.isQuestion;