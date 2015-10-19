const lib = {};
const req = require.context('./lib/', true, /\.js$/);
for (const key of req.keys()) {
	lib[key.slice(2, -3)] = req(key);
}

export default lib;
