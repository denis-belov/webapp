import './index.scss';

import getWASMModule from './cpp/src/main.cpp';

getWASMModule()
	.then((Module) => {
		// Module.canvas = document.createElement('canvas');
		// document.body.appendChild(Module.canvas);
		// log(Module);
		// const test = Module.cwrap('_Z9qweasdv', 'number', [], []);

		const test = Module.cwrap('_Z9test_funcv', 'number', [], []);

		console.log(test());
	});
