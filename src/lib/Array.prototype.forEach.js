import {
	ToObject, ToLength, Get, IsCallable, ToString, HasProperty, Call,
} from '../vendor/especially/abstract-operations';

// http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.foreach
export default function *forEach(callbackfn) {
	// 1. Let O be ToObject(this value).
	// 2. ReturnIfAbrupt(O).
	const O = ToObject(this);

	// 3. Let len be ToLength(Get(O, "length")).
	// 4. ReturnIfAbrupt(len).
	const len = ToLength(Get(O, 'length'));

	// 5. If IsCallable(callbackfn) is false, throw a TypeError exception.
	if (IsCallable(callbackfn) === false) {
		throw new TypeError('Tried to call a non-callable function.');
	}

	// 6. If thisArg was supplied, let T be thisArg; else let T be undefined.
	const T = arguments[1];

	// 7. Let k be 0.
	let k = 0;

	// 8. Repeat, while k < len
	while (k < len) {
		// 8.a. Let Pk be ToString(k).
		const Pk = ToString(k);

		// 8.b. Let kPresent be HasProperty(O, Pk).
		// 8.c. ReturnIfAbrupt(kPresent).
		const kPresent = HasProperty(O, Pk);

		// 8.d. If kPresent is true, then
		if (kPresent === true) {
			// 8.d.i. Let kValue be Get(O, Pk).
			// 8.d.ii. ReturnIfAbrupt(kValue).
			const kValue = Get(O, Pk);

			// 8.d.iii. Let funcResult be Call(callbackfn, T, «kValue, k, O»).
			// 8.d.iv. ReturnIfAbrupt(funcResult).
			yield* Call(callbackfn, T, [kValue, k, O]);
		}

		// 8.e. Increase k by 1.
		k++;
	}

	// 9. Return undefined.
	return undefined;

	// The length property of the forEach method is 1.
}

export function _makeWrapper(cb) {
	// a simple wrapper function with the correct name and length to replace the built-in one
	return function forEach(callbackfn) { // eslint-disable-line no-unused-vars
		return cb.apply(this, arguments);
	};
}
