const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfigBase = require('./webpack.base.conf');
const extractTextPlugin = require("extract-text-webpack-plugin");
const webpackConfigDev = {
	mode: 'development', // 通过 mode 声明开发环境
	output: {
		path: path.resolve(__dirname, '../dist'),
		// 打包多出口文件
		// 生成 a.bundle.[hash].js  b.bundle.[hash].js
		filename: './js/[name].bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, "../src"),
		publicPath:'/',
		host: "127.0.0.1",
		port: "8089",
		overlay: true, // 浏览器页面上显示错误
		open: false, // 开启浏览器
		// stats: "errors-only", //stats: "errors-only"表示只打印错误：
		hot: true, // 开启热更新
		proxy: {
			'/api': {
//				target: 'http://39.108.36.189:8001/',//小龙
//				target: 'http://39.108.36.189:8001/', //阿里云服务器
				target: 'http://39.108.37.60:8008/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			},
			'/apib': {
				target: 'https://gitee.com/', //新闻
				changeOrigin: true,
				pathRewrite: {
					'^/apib': '/'
				}
			}
		},
	},
	plugins: [
		//热更新
		new webpack.HotModuleReplacementPlugin(),
		new extractTextPlugin({
			filename: '[name].[hash:8].min.css',
		}),
	],
	devtool: "source-map",  // 开启调试模式
	module: {
		rules: []
	},
}
module.exports = merge(webpackConfigBase, webpackConfigDev);