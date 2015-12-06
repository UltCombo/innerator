import 'should';
import co from 'co';
import { installGlobals } from '../..';
installGlobals();

describe('Array.prototype.forEach', () => {
	it('should work', () => {
		const input = [4, 0, 1];
		const expected = input;
		const actual = [];
		return co(function *() {
			yield* input.forEach(function *(value) {
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

describe('Array.prototype.map', () => {
	it('should work', () => {
		const input = [4, 0, 1];
		const expected = [8, 0, 2];
		let actual;
		return co(function *() {
			actual = yield* input.map(function *(value) {
				return yield new Promise((fulfill) => {
					setTimeout(() => {
						fulfill(value * 2);
					}, value * 10);
				});
			});
		}).then(() => {
			actual.should.eql(expected);
		});
	});
});
