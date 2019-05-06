String.prototype.toUpper = function() {
  var newString = '';
  for (var i = 0; i < this.length; i++) {
    code = this.charCodeAt(i);
    if (code >= 97 && code <= 122) { code -= 32; }
    newString += String.fromCharCode(code);
  }
  return newString;
}

module.exports = String.prototype.toUpper;