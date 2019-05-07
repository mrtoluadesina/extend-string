String.prototype.toLower = function() {
  var newString = '';
  for (var i = 0; i < this.length; i++) {
    code = this.charCodeAt(i);
    if (code >= 65 && code <= 90) code += 32;
    newString += String.fromCharCode(code);
  }
  return newString;
}

module.exports = String.prototype.toLower;