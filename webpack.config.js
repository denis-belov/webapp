// Webpack 5.* dev server's live reload doesn't work correctly, try to update all dependencies to the latest later.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({

	entry: './src/index.js',

	target: 'web',

	resolve: {

		extensions: [ '.js', '.css', '.scss' ],
	},

	output: {

		path: path.join(__dirname, 'build'),
	},

	module: {

		rules: [

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:

					argv.mode === 'development' ?

						'babel-loader' :

						[
							'babel-loader',
							'eslint-loader',
						],
			},

			{
				test: /\.(css|scss)$/,
				use: [

					MiniCssExtractPlugin.loader,
					// to insert css into html
					// 'style-loader',
					'css-loader',
					'sass-loader',
				],
			},

			{
				test: /\.pug$/,
				use: [

					'html-loader',
					'pug-html-loader',
				],
			},

			{
				test: /\.html$/,
				use: { loader: 'html-loader', options: { minimize: true } },
			},

			{
				test: /\.(png|jpg|jpeg)$/,
				use: 'base64-inline-loader',
			},

			{
				test: /\.cpp$/,
				use: [

					{

						loader: '../xgk-cpp-webpack-loader/src/index.js',

						options: {

							execute:

								`make -f ${ path.join(__dirname, '/src/cpp/makefiles/emcc-x64/makefile') }`,

							target: path.join(__dirname, '/src/cpp/build/emcc-x64/output/js/main.js'),

							// total_rebuild: [

							//   '/home/denis/reps/denis-belov/xgk-math/makefiles/emcc/makefile':
							// ],
							// watch_file: [

							// 	'/home/denis/reps/denis-belov/xgk-math/makefiles/emcc/makefile',
							// 	'/home/denis/reps/denis-belov/wasm-test/src/cpp/makefile',
							// ],
							watch_dir: [

								// '/home/denis/reps/denis-belov/xgk-math/src',
								'/home/denis/reps/denis-belov/wasm-test/src/cpp/src',
								'/home/denis/reps/denis-belov/wasm-test/src/cpp/build',
							],
							// entry: '/home/denis/reps/denis-belov/wasm-test/src/cpp/src/main.cpp',
						},
					},
				],
			},
		],
	},

	devtool: argv.mode === 'development' ? 'source-map' : false,

	plugins: [

		new CleanWebpackPlugin(),

		new MiniCssExtractPlugin({ filename: 'index.css' }),

		new OptimizeCSSAssetsPlugin({}),

		new HtmlWebpackPlugin({

			filename: path.join(__dirname, 'build/index.html'),
			template: path.join(__dirname, 'src/index.pug'),
			inject: 'body',
			minify: {

				removeAttributeQuotes: true,
			},
		}),

		// new CopyPlugin({

		// 	patterns: [

		// 		{ from: 'src/models', to: 'models' },
		// 		{ from: 'src/textures', to: 'textures' },
		// 	],
		// }),
	],

	devServer: {

		compress: true,
		historyApiFallback: true,
		host: 'localhost',
		port: 8080,
		open: true,
	},
});
