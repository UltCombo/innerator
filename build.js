'use strict';

module.exports = exports = {
	srcBase: 'src/',
	src: {
		js: ['**/*.js'],
	},
	distBase: 'dist/',
	config: {
		babel: { presets: ['es2015'], plugins: ['transform-runtime', 'syntax-function-bind', 'transform-function-bind'] },
		mocha: ['--colors'/*, '--bail', '--timeout', '5000'*/],
	},
};

exports.config.webpack = require('./webpack.config');
