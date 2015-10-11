import 'should';
import co from 'co';
import Array$prototype$forEach from '../lib/Array.prototype.forEach';

describe('Array.prototype.forEach', () => {
	it('should work', () => {
		const expected = [4, 0, 1];
		const actual = [];
		return co(function *() {
			yield* expected::Array$prototype$forEach(function *(value) {
				yield new Promise((fulfill) => {
					setTimeout(() => {
						actual.push(value);
						fulfill();
					}, value * 10);
				});
			});
		}).then(() => {
			actual.should.eql(expected);
		});
	});
});
