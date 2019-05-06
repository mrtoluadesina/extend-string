function AString () {

}

AString.prototype = Object.create(String.prototype);
// AString.prototype.constructor = AString;

AString.prototype = {
  constructor = AString,

}

module.exports = AString;