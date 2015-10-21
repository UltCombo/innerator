import 'should';
import co from 'co';
import { lib } from '../..';
const { 'Array.prototype.forEach': { default: forEach } } = lib;

describe('Array.prototype.forEach', () => {
	it('should work', () => {
		const expected = [4, 0, 1];
		const actual = [];
		return co(function *() {
			yield* expected::forEach(function *(value) {
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
