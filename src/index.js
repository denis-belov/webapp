import wasm_code from './cpp/src/main.cpp';
// import getWASMModule from './cpp/build/emcc-x64/output/js/main.js';



// getWASMModule()
// 	.then
// 	(
// 		(Module) =>
// 		{
// 			LOG(Module)
// 			// console.log(Module.function_cpp, Module.function_cpp());

// 			// Module.HEAPF32[Module.function_cpp()] = 0;

// 			// LOG(Module.HEAPF32.slice(Module.function_cpp()))
// 			// LOG(Module.HEAP32.slice(Module.function_cpp()))
// 			// LOG(Module.function_cpp2())
// 		},
// 	);



// const importObject =
// {
// 	imports:
// 	{
// 		imported_func (arg)
// 		{
// 			LOG(arg);
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

const imports =
{
	env:
	{
		// function_js,
	},
};

// const mod = new WebAssembly.Module(wasm_code);
// const instance = new WebAssembly.Instance(mod, imports);
// LOG(instance.exports)

WebAssembly.compile(wasm_code)
	.then
	(
		(evt) =>
		{
			LOG(evt)
		},
	);
// instance.exports._Z12getJsFuncPtrPFdvE(function_js);

// getWASMModule()
// 	.then
// 	(
// 		(Module) =>
// 		{
// 			LOG(Module)
// 			console.log(Module.function_cpp, Module.function_cpp());

// 			Module.HEAPF32[Module.function_cpp()] = 0;

// 			LOG(Module.HEAPF32.slice(Module.function_cpp()))
// 			LOG(Module.HEAP32.slice(Module.function_cpp()))
// 			LOG(Module.function_cpp2())
// 		},
// 	);
