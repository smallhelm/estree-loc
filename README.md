# estree-loc

[![build status](https://secure.travis-ci.org/smallhelm/estree-loc.svg)](https://travis-ci.org/smallhelm/estree-loc)

Convert a string start and end indices to an estree loc objects.

```js
var EStreeLoc = require('estree-loc');

var src = 'one\n    two\nthree  ';

var toLoc = EStreeLoc(src, 'some-file.js');

var loc = toLoc(8, 17);
```
```js
{
  source: 'some-file.js'
  start: {line: 2, column: 4},
  end: {line: 3, column: 5}
}
```

## API
### toLoc = EStreeLoc(src[, source])
Constructs the `toLoc` function. If you give it `source` file path it will add that to each loc.

### loc = toLoc(start, end)
Returns the `loc` object for at the given start and end indices of the source code.

## License
MIT
