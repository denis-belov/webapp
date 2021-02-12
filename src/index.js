import './index.scss';

import getWASMModule from './cpp/src/main.cpp';



const function_js = (value) => {

	let sum = 0;

	for (let i = 0; i < value; ++i) {

		sum += i;
	}

	return sum;
};



getWASMModule()
	.then((Module) => {

		// Module.main() is being invoked automatically if defined and binded


		// Module._main();



		const value = Math.floor(Math.random() * 10000000);



		const start1 = Date.now();

		console.log(function_js(value));

		console.log(Date.now() - start1);



		const start2 = Date.now();

		console.log(Module.function_cpp(value));

		console.log(Date.now() - start2);



		// Module.canvas = document.createElement('canvas');
		// document.body.appendChild(Module.canvas);
		// log(Module);
		// const test = Module.cwrap('_Z9qweasdv', 'number', [], []);

		// const test = Module.cwrap('test_func', 'number', [], []);

		// console.log(99);

		// console.log(Module.main());
	});
