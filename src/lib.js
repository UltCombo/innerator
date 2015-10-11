// This file is only executed as part of the browserify build.

const lib = {};
const req = require.context('./lib/', true, /\.js$/);
for (const key of req.keys()) {
	lib[key.slice(2)] = req(key);
}

export default lib;
