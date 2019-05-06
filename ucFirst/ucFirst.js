String.prototype.ucFirst = function() {
  return String.fromCharCode(this.charCodeAt(0) & 223) + this.substr(1);
}

module.exports = String.prototype.ucFirst;