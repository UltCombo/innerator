const lib = {};
export default lib;
export const wrappers = {};

function walkCreate(root, props) {
	return props.reduce((obj, prop) => obj[prop] = obj[prop] || {}, root);
}

const req = require.context('./lib/', true, /\.js$/);
for (const key of req.keys()) {
	const methodPath = key.slice(2, -3).split('.');
	const methodName = methodPath.pop();
	const inneratored = req(key);
	walkCreate(lib, methodPath)[methodName] = inneratored.default;
	walkCreate(wrappers, methodPath)[methodName] = inneratored._makeWrapper;
}
