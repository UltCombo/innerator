import { define_built_in_data_property as defineBuiltInDataProperty } from './vendor/especially/meta';
import lib, { wrappers } from './lib';

export function installGlobals({ supportAether = false } = {}) {
	(function recurse(dest, src, wrapper) {
		for (const key of Object.keys(src)) {
			const original = dest[key];

			// Only patch existing functions/methods/constructors.
			if (!original) continue;

			const value = src[key];

			if (typeof value === 'function') {
				defineBuiltInDataProperty(
					dest,
					key,
					wrapper[key](function(cb) {
						// Crude way to check if callback is a generator.
						// TC39 decided against providing a clean way to check if a function is a generator,
						// as any function can return iterator objects and thus be a drop-in replacement for generators.
						// We only really care about true generators, though.
						// Also, keeping this check simple is good for interop between native and transpiled generators.

						// NOTE this wrapper logic only works for methods whose callback is the first parameter. We may
						// need to factor out some of this generalization in the future when this breaks.

						// NOTE this should probably be wrapped with a try statement, as getters can throw errors.
						// Though, let's prioritize performance over this rare edge case until it actually happens.
						if (cb && (
							supportAether
							? cb._isAetherGen
							: cb.constructor && cb.constructor.name === 'GeneratorFunction'
						)) {
							return value.apply(this, arguments);
						}
						return original.apply(this, arguments);
					})
				);
			} else {
				recurse(original, value, wrapper[key]);
			}
		}
	})(
		typeof global === 'object' ? global :
		typeof window === 'object' ? window :
		typeof self === 'object' ? self : this,
		lib,
		wrappers
	);
}


export { lib };
