import './index.scss';

import getWASMModule from './cpp/src/main.cpp';

getWASMModule()
	.then((Module) => {
		// Module.canvas = document.createElement('canvas');
		// document.body.appendChild(Module.canvas);
		// log(Module);
		// const test = Module.cwrap('_Z9qweasdv', 'number', [], []);

		const test = Module.cwrap('test_func', 'number', [], []);

		console.log(test(1, 2));
		console.log(Module);
	});
