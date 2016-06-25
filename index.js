var LineColumn = require('line-column');

module.exports = function(str){
  var lc = LineColumn(str, {origin: 0});

  var toPosition = function(index){
    var p = lc.fromIndex(index);
    return {
      line: p.line + 1,
      column: p.col
    };
  };

  return function(start, end){
    return {
      source: str.substring(start, end),
      start: toPosition(start),
      end: toPosition(end)
    };
  };
};
