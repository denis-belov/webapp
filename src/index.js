// import './index.scss';

// import { WebGL } from '/home/denis/reps/3d-smile/3d-smile-glkit/src/index';

// const [ canvas ] = document.getElementsByTagName('canvas');

// const glkit = new WebGL({ canvas, contextType: 'webgl2' });

// const gl = glkit.webgl_rendering_context;

// gl.clearColor(0.5, 0.5, 0.5, 1);

// const m1 = new glkit.Mat4();
// const m2 = new glkit.Mat4();

// const _set = new glkit.UniformSet(

// 	{
// 		test1:
// 		{
// 			target: m1,
// 			offset: 0,
// 		},

// 		test2:
// 		{
// 			target: m2,
// 			offset: 16 * 4,
// 		},
// 	},

// 	0,
// );

// const p1 =
// 	new glkit.Program(

// 		{
// 			VS:

// 				() =>
// 				`#version 300 es

// 				precision highp int;
// 				precision highp float;

// 				layout (location = 0) in vec3 in_position;

// 				${ _set.inject('std140') }

// 				void main ()
// 				{
// 					gl_Position = vec4(in_position + test2[0].y * 0.1, 1.0f);
// 				}`,

// 			FS:

// 				() =>
// 				`#version 300 es

// 				precision highp int;
// 				precision highp float;

// 				${ _set.inject('std140') }

// 				layout (location = 0) out vec4 fragment_color;

// 				void main ()
// 				{
// 					fragment_color = vec4(test1[0].xyz, 1.0)
// 				}`,
// 		},
// 	)
// 		.compose();

// const b1 = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, b1);
// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ -1, -1, 0, -1, 1, 0, 1, -1, 0 ]), gl.STATIC_DRAW);

// gl.enableVertexAttribArray(0);

// new glkit.Time().loop3(

// 	() =>
// 	{
// 		LOG('updated');

// 		gl.clear(gl.COLOR_BUFFER_BIT);

// 		_set.use3();

// 		p1.use3();

// 		gl.bindBuffer(gl.ARRAY_BUFFER, b1);
// 		gl.vertexAttribPointer(0, 3, gl.FLOAT, 0, 0, 0);
// 		gl.drawArrays(gl.TRIANGLES, 0, 3);
// 	},
// );

// setTimeout(

// 	() =>
// 	{
// 		m1.arr.set([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]);

// 		m1.$();
// 	},

// 	3000,
// );

// setTimeout(

// 	() =>
// 	{
// 		m2.arr.set([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]);

// 		m2.$();
// 	},

// 	3100,
// );

import wasm_code from './cpp/src/main.cpp';
import test from './test';

LOG(test)
LOG(wasm_code)

// const importObject = {
// 	imports: {
// 		imported_func: function(arg) {
// 			console.log(arg);
// 		}
// 	}
// };

// const function_js = () =>
// {
// 	// let sum = 0;

// 	// for (let i = 0; i < value; ++i) {

// 	// 	sum += i;
// 	// }

// 	// return sum;

// 	return 7772;
// };

// // LOG(getWASMModule)

// const imports =
// {
// 	env:
// 	{
// 		function_js,
// 	},
// };

// const mod = new WebAssembly.Module(wasm_code);
// const instance = new WebAssembly.Instance(mod, imports);
// LOG(instance.exports)
// instance.exports._Z12getJsFuncPtrPFdvE(function_js);

// LOG(instance.exports._Z12function_cppm())

// 		const value = Math.floor(Math.random() * 10000000);



// 		const start1 = Date.now();

// 		console.log(function_js(value));

// 		console.log(Date.now() - start1);



// 		const start2 = Date.now();

// 		LOG(instance.exports._Z12function_cppd(value));

// 		console.log(Date.now() - start2);

// getWASMModule()
// 	.then((Module) => {

// 		// Module.main() is being invoked automatically if defined and binded


// 		// Module._main();
// 		console.log(Module.function_cpp);



// 		const value = Math.floor(Math.random() * 1000);



// 		const start1 = Date.now();

// 		console.log(function_js(value));

// 		console.log(Date.now() - start1);



// 		const start2 = Date.now();

// 		console.log(Module.function_cpp(value));

// 		console.log(Date.now() - start2);



// 		// Module.canvas = document.createElement('canvas');
// 		// document.body.appendChild(Module.canvas);
// 		// log(Module);
// 		// const test = Module.cwrap('_Z9qweasdv', 'number', [], []);

// 		// const test = Module.cwrap('test_func', 'number', [], []);

// 		// console.log(99);

// 		// console.log(Module.main());
// 	});
