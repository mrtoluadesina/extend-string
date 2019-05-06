var toCurrency = require('./toCurrency');

test('returns a currency representation of the inputed string', function() {
  var money = 12569400, notMoney = 'threeten';
  expect(money.toCurrency()).toBe(12,569,400);
  expect(money.toCurrency()).toBe('Not a Currency');
});