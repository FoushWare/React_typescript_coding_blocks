const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
	entry: {
		main: ["@babel/polyfill", './src/app.js']
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'foushware awesome webpack sideproject'
		})
	],
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.(gif|png|jpg|jpeg|svg)$/i,
			type: 'asset/resource'
		}

		]
	}
}