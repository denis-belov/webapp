import '@babel/polyfill';

import wasm_code from './cpp/src/main.cpp';



window.addEventListener
(
	'load',

	async () =>
	{
		let MEM_UI8 = null;

		const wasm_module = await WebAssembly.compile(wasm_code);

		const wasm_module_instance =
			await WebAssembly.instantiate
			(
				wasm_module,

				{
					env:
					{
						__memory_base: 0,
						__table_base: 0,
						memory: new WebAssembly.Memory({ initial: 1 }),

						memcpy (dst, src, len)
						{
							MEM_UI8.copyWithin(dst, src, src + len);

							return dst;
						},

						printf: () => 0,
						console_log: (x) => LOG('C/C++:', x),
						sin: Math.sin,
						cos: Math.cos,
						tan: Math.tan,
						_Znwm: () => 0, // new
						_ZdlPv: () => 0, // delete
						_ZSt20__throw_length_errorPKc: () => 0,
						memset: (dst, val, len) => LOG('memset', dst, val, len),
						putchar: () => 0,
					},
				},
			);

		LOG(wasm_module_instance);

		MEM_UI8 = new Uint8Array(wasm_module_instance.exports.memory.buffer);

		const MEM_F32 = new Float32Array(wasm_module_instance.exports.memory.buffer);

		const m_addr = wasm_module_instance.exports._Z4getMv();

		LOG(m_addr)

		LOG(MEM_F32.slice(m_addr / 4, (m_addr / 4) + 16));

		// wasm_module_instance.exports._ZN3XGK4MATH4Mat45identEv(m_addr);

		wasm_module_instance.exports._ZN3XGK4MATH4Mat46qweqweEv
		(
			m_addr,
			// 10,
			// window.innerWidth / window.innerHeight,
			// 1,
			// 2000,
			// 1,
		);

		wasm_module_instance.exports._Z6qweqwev();

		// LOG(MEM_F32.slice(m_addr / 4, (m_addr / 4) + 16));
	},
);
