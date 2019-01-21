# deneg-zero

> Checks if an integer is [negative zero](http://en.wikipedia.org/wiki/Signed_zero), and converts to positive zero.

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
```

## License

MIT © [Philihp Busby](https://philihp.com)
