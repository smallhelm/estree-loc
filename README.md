# estree-loc

[![build status](https://secure.travis-ci.org/smallhelm/estree-loc.svg)](https://travis-ci.org/smallhelm/estree-loc)

Convert a string start and end indices to an estree loc objects.

```js
var EStreeLoc = require('estree-loc');

var src = 'one\n    two\nthree  ';

var toLoc = EStreeLoc(src);

var loc = toLoc(8, 17);
```
```js
{
  source: 'two\nthree',
  start: {line: 2, column: 4},
  end: {line: 3, column: 5}
}
```

## License
MIT
