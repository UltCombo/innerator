'use strict';

module.exports = exports = {
	srcBase: 'src/',
	src: {
		js: ['**/*.js'],
	},
	distBase: 'dist/',
	config: {
		babel: { optional: ['runtime'], stage: 0 },
		mocha: ['--colors'/*, '--bail', '--timeout', '5000'*/],
	},
};

exports.config.webpack = require('./webpack.config');
