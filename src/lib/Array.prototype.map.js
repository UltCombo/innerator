import {
	ToObject, ToLength, Get, IsCallable, ArraySpeciesCreate, ToString, HasProperty, Call, CreateDataPropertyOrThrow,
} from '../vendor/especially/abstract-operations';

// https://tc39.github.io/ecma262/#sec-array.prototype.map
export default function *map(callbackfn) {
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

	// 5. Let A be ? ArraySpeciesCreate(O, len).
	const A = ArraySpeciesCreate(O, len);

	// 6. Let k be 0.
	let k = 0;

	// 7. Repeat, while k < len
	while (k < len) {
		// 7.a. Let Pk be ToString(k).
		const Pk = ToString(k);

		// 7.b. Let kPresent be ? HasProperty(O, Pk).
		const kPresent = HasProperty(O, Pk);

		// 7.c. If kPresent is true, then
		if (kPresent === true) {
			// 7.c.i. Let kValue be ? Get(O, Pk).
			const kValue = Get(O, Pk);

			// 7.c.ii. Let mappedValue be ? Call(callbackfn, T, «kValue, k, O»).
			const mappedValue = yield* Call(callbackfn, T, [kValue, k, O]);

			// 7.c.iii. Perform ? CreateDataPropertyOrThrow (A, Pk, mappedValue).
			CreateDataPropertyOrThrow(A, Pk, mappedValue);
		}

		// 7.d. Increase k by 1.
		k++;
	}

	// 8. Return A.
	return A;

	// The length property of the map method is 1.
}

export function _makeWrapper(cb) {
	// a simple wrapper function with the correct name and length to replace the built-in one
	return function forEach(callbackfn) { // eslint-disable-line no-unused-vars
		return cb.apply(this, arguments);
	};
}
