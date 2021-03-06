# ECMAScript Spec Operations, in ECMAScript

Have you ever wanted to write a to-the-letter implementation of some ECMAScript spec function? Maybe you want to run tests against it; maybe you're just crazy and like self-hosting JavaScript in JavaScript. In either case, this is the package for you!

**Especially** has a small-but-growing collection of meta-textual and abstract operations drawn directly from the pages of the [ECMAScript 2015 draft specification](http://people.mozilla.org/~jorendorff/es6-draft.html). From common things like [Get](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-o-p) to dealing with [internal slots](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-internal-methods-and-internal-slots), Especially has you covered.

## APIs

Especially has no main module (*gasp*). Instead, you'll require one of the top-level modules that contain the stuff you want.

### require("especially/abstract-operations")

- [ArrayCreate](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-arraycreate)
- [Call](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call)
- [CreateDataProperty](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-createdataproperty)
- [DateFromTime](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-date-number)
- [Day](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-day-number-and-time-within-day)
- [DayFromYear](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-year-number)
- [DaysInYear](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-year-number)
- [DayWithinYear](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-month-number)
- [EnqueueJob](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-enqueuejob)
- [Get](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-get-o-p)
- [GetV](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-getv)
- [GetIterator](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-getiterator): uses the `@@iterator` symbol.
- [GetMethod](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-getmethod)
- [GetPrototypeFromConstructor](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-getprototypefromconstructor)
- [HasProperty](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-hasproperty)
- [InLeapYear](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-year-number)
- [Invoke](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-invoke)
- [IsCallable](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable)
- [IsConstructor](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor): not spec compliant, but the best we can do
- [IsPropertyKey](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey)
- [IteratorComplete](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratorcomplete)
- [IteratorNext](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratornext)
- [IteratorStep](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratorstep)
- [IteratorValue](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-iteratorvalue)
- [MakeDate](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-makedate)
- [MakeDay](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-makeday)
- [MakeTime](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-maketime)
- [MonthFromTime](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-month-number)
- [ObjectCreate](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-objectcreate)
- [OrdinaryCreateFromConstructor](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-ordinarycreatefromconstructor)
- [SameValue](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue)
- [SameValueZero](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
- [SpeciesConstructor](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-speciesconstructor)
- [TimeClip](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-timeclip)
- [TimeFromYear](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-year-number)
- [TimeWithinDay](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-day-number-and-time-within-day)
- [ToBoolean](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean)
- [ToInteger](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger)
- [ToLength](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
- [ToNumber](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tonumber)
- [ToObject](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject)
- [ToString](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring)
- [Type](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-data-types-and-values): returns the types as strings, e.g. `"Object"`.
- [YearFromTime](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-year-number)

### require("especially/math")

A variety of math operations from the [Algorithm Conventions](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-algorithm-conventions) section of the spec:

- abs(_x_)
- sign(_x_)
- min(<var>x</var><sub>1</sub>, <var>x</var><sub>2</sub>, …, <var>x</var><sub>n</sub>)
- floor(_x_)

### require("especially/meta")

- [`assert`](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-algorithm-conventions): ensures you pass it a boolean, then throws if it's not true
- [`define_built_in_data_property`](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-standard-built-in-objects): a shortcut for defining a built-in data property with the usual property descriptor.
- [Internal slot](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-internal-methods-and-internal-slots) management:
    - `make_slots(object, arrayOfSlotNames)`: call this to initialize an object's internal slots. Often referenced in the spec as "instances of (something) are initially created with the internal slots listed in (some table)."
    - `get_slot(object, name)`: get the value of an internal slot. Often referenced in the spec as "the value of (object)'s [[SlotName]] internal slot."
    - `set_slot(object, name)`: set the value of an internal slot. Often referenced in the spec as "Set (object)'s [[SlotName]] internal slot to (a value)."
    - `has_slot(object)`: check whether an object has an internal slot with the given name. Often referenced in the spec as "If (object) does not have a [[SlotName]] internal slot."

### require("especially/well-known-symbols")

Some of the [well-known symbols](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-symbols) are included:

- `"@@iterator"` will give you a symbol that is used by GetIterator. (It is the same as V8's default `Symbol.iterator`.)
- `"@@species"` will give the symbol that is used by SpeciesConstructor. (It is a freshly-minted symbol in environments that don't have `Symbol.species` implemented yet.)

### require("especially/intrinsics")

Some of the [well-known intrinsic objects](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-well-known-intrinsic-objects) are included by name, e.g. `"%ObjectPrototype%"`. These are used by GetPrototypeFromConstructor and related operations.

## Usage Notes

Especially is meant to run in Node.js >= 5. It uses certain ES2015 features only implemented in modern V8.

Install it from npm into your project with `npm install especially`.

You can see examples of it in use in [the reference implementation of the ES2015 promises specification](https://github.com/domenic/promises-unwrapping/tree/master/reference-implementation).
