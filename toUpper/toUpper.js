String.prototype.toUpper = function() {
  var newString = '';
  for (var str in this) {
    code = this.charCodeAt(str)
    if (code >= 97 && code <= 122) code -= 32;
    newString += String.fromCharCode(code);
  }
  return newString;
}

module.exports = String.prototype.toUpper;