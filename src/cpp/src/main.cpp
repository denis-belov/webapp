/**
 * Description @xgk/cpp-webpack-loade_r
 * @param {} execute genmake emcc-x64 /home/denis/reps/denis-belov/webapp/src/cpp/genmake.json
 * @param {} target /home/denis/reps/denis-belov/webapp/src/cpp/build/emcc-x64/output/js/main.js
 * @param {} watchDirectories [ "/home/denis/reps/denis-belov/xgk-math/src", "/home/denis/reps/denis-belov/webapp/src/cpp/src" ]
 * @param {} watchFiles
 * [
 * "/home/denis/reps/denis-belov/xgk-math/genmake.json",
 * "/home/denis/reps/denis-belov/webapp/src/cpp/genmake.json"
 * ]
 */

/**
 * Description @xgk/cpp-webpack-loader
 * @param {} execute genmake clang-wasm-x64 /home/denis/reps/denis-belov/webapp/src/cpp/genmake.json
 * @param {} target /home/denis/reps/denis-belov/webapp/src/cpp/build/clang-wasm-x64/output/wasm/main.wasm
 * @param {} watchDirectories [ "/home/denis/reps/denis-belov/xgk-math/src", "/home/denis/reps/denis-belov/webapp/src/cpp/src" ]
 * @param {} watchFiles
 * [
 * "/home/denis/reps/denis-belov/xgk-math/genmake.json",
 * "/home/denis/reps/denis-belov/webapp/src/cpp/genmake.json"
 * ]
 */



// #include <emscripten.h>
// #include <emscripten/bind.h>
// #include <webgpu/webgpu.h>
// #include <emscripten/html5_webgpu.h>

// #include "denis-belov/xgk-math/src/vec4/vec4.h"
// #include "denis-belov/xgk-math/src/mat4/mat4.h"

// XGK::MATH::Mat4 m;

// WGPUInstanceDescriptor wgpu_instance_info;
// WGPUInstance wgpu_instance;
// WGPUDevice wgpu_device;
// WGPUSurface wgpu_surface;



// // using std::cout;
// // using std::endl;



// int extern_function (void);
// double function_js (void);



// size_t function_cpp (void)
// {
// 	m.invns128();

// 	return ((size_t (&m)) / sizeof(float));
// }

// EM_JS
// (
// 	void,
// 	JS_wgpu_init,
// 	(),

// 	{
// 		async function init ()
// 		{
// 			Module.preinitializedWebGPUDevice = -1;
// 			const adapter = await navigator.gpu.requestAdapter();
// 			const device = await adapter.requestDevice();
// 			Module.preinitializedWebGPUDevice = device;
// 		};
// 		init();
// 	}
// );

// uint32_t function_cpp2 (void)
// {
// 	JS_wgpu_init();

// 	wgpu_device = emscripten_webgpu_get_device();

// 	wgpu_instance = wgpuCreateInstance(&wgpu_instance_info);

// 	WGPUSurfaceDescriptorFromCanvasHTMLSelector canvas_info = {};
// 	canvas_info.chain.sType = WGPUSType_SurfaceDescriptorFromCanvasHTMLSelector;
// 	canvas_info.selector = "canvas";

// 	WGPUSurfaceDescriptor surface_info = {};
// 	surface_info.nextInChain = reinterpret_cast<WGPUChainedStruct*>(&canvas_info);

// 	wgpu_surface = wgpuInstanceCreateSurface(wgpu_instance, &surface_info);

// 	WGPUSwapChainDescriptor swapchain_info
// 	{
// 		// .nextInChain = nullptr,
// 		// .label = "test",
// 		.usage = WGPUTextureUsage_RenderAttachment,
// 		.format = WGPUTextureFormat_RGBA8Unorm,
// 		.width = 300,
// 		.height = 150,
// 		.presentMode = WGPUPresentMode_Fifo,
// 	};

// 	wgpuDeviceCreateSwapChain(wgpu_device, wgpu_surface, &swapchain_info);

// 	return 0;
// }

// EMSCRIPTEN_BINDINGS (MODULE)
// {
// 	emscripten::function("function_cpp", function_cpp);
// 	emscripten::function("function_cpp2", function_cpp2);
// }
