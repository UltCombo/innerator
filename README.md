# innerator
[![npm version](http://img.shields.io/npm/v/innerator.svg)](https://npmjs.org/package/innerator)
[![Build Status](http://img.shields.io/travis/UltCombo/innerator.svg)](https://travis-ci.org/UltCombo/innerator)
[![Dependency Status](http://img.shields.io/david/UltCombo/innerator.svg)](https://david-dm.org/UltCombo/innerator)
[![devDependency Status](http://img.shields.io/david/dev/UltCombo/innerator.svg)](https://david-dm.org/UltCombo/innerator#info=devDependencies)

JavaScript built-in functions rewritten to understand generators.

The innerator functions closely follow the [ECMA-262's current work](https://tc39.github.io/ecma262/). The inneratored versions of the built-in functions support generator functions where only regular functions were supported, properly executing the generator and iterating over it.

# Install

```
npm install --save innerator
```

# API

innerator has two modes: library and global.

The library mode is 100% self-contained and does not conflict with existing code.

The global mode overrides built-ins and may break existing code under rare circumstances.

## Library mode

```js
// Import the library with module syntax:
import { lib } from 'innerator';
// Or CommonJS:
const lib = require('innerator').lib;

// Then call or apply the functions you want:
yield* lib.Array.prototype.forEach.call([1, 2, 3], function *(value) {
	yield new Promise(resolve => setTimeout(resolve, value * 100));
	console.log(value);
});
```

You can also use the [Function Bind syntax](https://github.com/zenparsing/es-function-bind) (compiled with [Babel](http://babeljs.io/)) to write more readable code:

```js
yield* [1, 2, 3]::lib.Array.prototype.forEach(function *(value) {
	yield new Promise(resolve => setTimeout(resolve, value * 100));
	console.log(value);
});
```

The examples above are very contrived, for a real use case you may want to yield promises from inside the generator, and delegate the iteration logic to an outer iterator by `yield*`ing the return value of the innerator library function. See the [unit tests](src/test/lib.js) for more elaborated examples.

## Global mode

```js
// Import the library with module syntax:
import { installGlobals } from 'innerator';
installGlobals();
// Or CommonJS:
require('innerator').installGlobals();

// Now the built-ins will accept generator functions as callbacks
// and return an iterator over the callback's `yield`s,
// which you can further delegate to an outer generator:
const doubledInneratored = yield* [1, 2, 3].map(function *(value) {
	yield new Promise(resolve => setTimeout(resolve, value * 100));
	return value * 2;
});

// And of course, the built-ins still support regular callback functions:
const doubledRegular = [1, 2, 3].map(function (value) {
	return value * 2;
});
```

The global mode overrides built-ins in such a way that they work with generator functions while keeping compatibility with regular functions.

This means that once the global mode has been installed, passing a generator function to a built-in will behave differently from the native behavior. Most of the time, it does not make sense to pass a generator function to built-in functions, but in rare occasions (e.g. mapping an array to iterator objects) the behavior will be significantly different and thus introduce breaking changes.

The global mode is not recommended unless you are just making a quick experiment or running in an environment where you have full control over where generator functions can be used.

### Options

You can pass an options object as the first argument to the `installGlobals` function in order to customize its behavior. The options object may contain the following properties:

- `supportAether` (boolean, default: `false`) - whether to support code running inside an [Aether](http://aetherjs.com/) sandbox.

## Developing

You may find these commands useful if you want to hack this package's source:

- `npm run dev`: makes a complete build (clean up, lint, compile and test) then starts watching the `src` directory to make incremental builds.
- `npm test`: makes a complete build.

# Changelog

No stable release yet.
