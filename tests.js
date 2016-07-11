var test = require('tape');
var toLoc = require('./');

test('it', function(t){

  t.deepEquals(toLoc('one two three')(4, 7), {
    source: 'two',
    start: {line: 1, column: 4},
    end: {line: 1, column: 7}
  });

  t.deepEquals(toLoc('one\ntwo\nthree')(4, 7), {
    source: 'two',
    start: {line: 2, column: 0},
    end: {line: 2, column: 3}
  });

  t.deepEquals(toLoc('one\n    two\nthree  ')(8, 17), {
    source: 'two\nthree',
    start: {line: 2, column: 4},
    end: {line: 3, column: 5}
  });

  t.deepEquals(toLoc('only')(0, 4), {
    source: 'only',
    start: {line: 1, column: 0},
    end: {line: 1, column: 4}
  }, 'should work when given the last index');

  t.end();
});
