# deneg-zero

![NPM Test](https://github.com/philihp/deneg-zero/workflows/NPM%20Test/badge.svg)
[![Depfu](https://badges.depfu.com/badges/e62c2a4487ecad608eff94c6b99245e7/overview.svg)](https://depfu.com/github/philihp/deneg-zero?project_id=6889)
[![Coverage Status](https://coveralls.io/repos/github/philihp/deneg-zero/badge.svg?branch=coverage)](https://coveralls.io/github/philihp/deneg-zero?branch=coverage)

Checks if an integer is [negative zero](http://en.wikipedia.org/wiki/Signed_zero), and converts to positive zero.

## Install

```
npm install --save deneg-zero
```

## Usage

```js
import deneg from "deneg-zero";

deneg(-0);
//=> 0

deneg(+0);
//=> 0

deneg(12345);
//=> 12345

deneg(-4);
//=> -4

[-2,-1,-0,0,1,2].map(deneg)
//=> [ -2, -1, 0, 0, 1, 2 ]
```

## License

MIT © [Philihp Busby](https://philihp.com)
