const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack');

module.exports = {
	entry: {
		main: ["@babel/polyfill", './src/index.js']
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
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new webpack.ProvidePlugin({
			// This is a Replacement of long imports in every file 
			/*
				import ReactDOM from ‘react-dom’
				import _ from 'lodash'
				import $ from 'jquery'
				import cssModule from 'react-css-modules'
			*/
			"React": "react",
			'ReactDOM': 'react-dom',
			'$': 'jquery',
			'_': 'lodash',

		}),

	],
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: ['@babel/plugin-transform-runtime']
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