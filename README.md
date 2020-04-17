# deneg-zero

![npm](https://img.shields.io/npm/v/deneg-zero)
![tests](https://github.com/philihp/deneg-zero/workflows/tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/philihp/deneg-zero/badge.svg?branch=master)](https://coveralls.io/github/philihp/deneg-zero?branch=master)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)

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
