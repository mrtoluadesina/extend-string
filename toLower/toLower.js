String.prototype.toLower = function() {
  var newString = '';
  for (var str in this) {
    code = this.charCodeAt(str);
    if (code >= 65 && code <= 90) code += 32;
    newString += String.fromCharCode(code);
  }
  return newString;
}

module.exports = String.prototype.toLower;