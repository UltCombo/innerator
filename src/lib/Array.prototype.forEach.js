import {
	ToObject, ToLength, Get, IsCallable, ToString, HasProperty, Call,
} from '../vendor/especially/abstract-operations';

// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
export default function *forEach(callbackfn) {
	// 1. Let O be ? ToObject(this value).
	const O = ToObject(this);

	// 2. Let len be ? ToLength(? Get(O, "length")).
	const len = ToLength(Get(O, 'length'));

	// 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError('Tried to call a non-callable function.');
	}

	// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
	const T = arguments[1];

	// 5. Let k be 0.
	let k = 0;

	// 6. Repeat, while k < len
	while (k < len) {
		// 6.a. Let Pk be ToString(k).
		const Pk = ToString(k);

		// 6.b. Let kPresent be ? HasProperty(O, Pk).
		const kPresent = HasProperty(O, Pk);

		// 6.c. If kPresent is true, then
		if (kPresent === true) {
			// 6.c.i. Let kValue be ? Get(O, Pk).
			const kValue = Get(O, Pk);

			// NOTE: At the time of writing, this is not merged yet: https://github.com/tc39/ecma262/pull/230
			// 6.c.ii. Perform ? Call(callbackfn, T, «kValue, k, O»).
			yield* Call(callbackfn, T, [kValue, k, O]);
		}

		// 6.d. Increase k by 1.
		k++;
	}

	// 7. Return undefined.
	return undefined;

	// The length property of the forEach method is 1.
}

export function _makeWrapper(cb) {
	// a simple wrapper function with the correct name and length to replace the built-in one
	return function forEach(callbackfn) { // eslint-disable-line no-unused-vars
		return cb.apply(this, arguments);
	};
}
