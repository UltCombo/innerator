'use strict';

var webpack = require('webpack');
var build = require('./build');

module.exports = {
	entry: './' + build.distBase + 'index',
	output: {
		path: __dirname + '/' + build.distBase,
		filename: 'bundle.js',
		library: 'innerator',
		libraryTarget: 'umd',
	},
	cache: {}, // Enable caching, see http://webpack.github.io/docs/configuration.html#cache
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
	],
};
