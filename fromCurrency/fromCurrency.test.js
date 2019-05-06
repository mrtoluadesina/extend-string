var fromCurrency = require('./fromCurrency');

test('returns number from an inputed currency string', function() {
  var money = '12,569,400';
  expect(money.fromCurrency()).toBe('12569400.00');
});