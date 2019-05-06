var isQuestion = require('./isQuestion');

test('Check and return true is a string is a question - that is ends with a ?', function() {
  var question = 'How are you?', notAQuestion = 'I am fine';
  expect(question.isQuestion()).toBeTruthy();
  expect(notAQuestion.isQuestion()).toBeFalsy();
})