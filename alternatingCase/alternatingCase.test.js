var alternatingCase = require('./alternatingCase');

test('Alternate charaters of a string', function() {
  var aString = 'Onomatopoeia';
  expect(aString.alternatingCase()).toBe('oNoMaToPoEiA');
});