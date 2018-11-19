const extractTextPlugin = require("extract-text-webpack-plugin");
const rules = [{
		test: /\.(css|scss|sass)$/,
		// 不分离的写法
		// use: ["style-loader", "css-loader",sass-loader"]
		// 使用postcss不分离的写法
		// use: ["style-loader", "css-loader", "sass-loader","postcss-loader"]
		// 此处为分离css的写法
		/*use: extractTextPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "sass-loader"],
			publicPath: "../" 
		})*/
		// 区别开发环境和生成环境
		use: process.env.NODE_ENV === "development" ? ["style-loader", "css-loader", "sass-loader", "postcss-loader"] : extractTextPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "sass-loader", "postcss-loader"],
			publicPath: "../"		//css中的基础路径  注意这里会影响到打包后css背景图片的路径

		})
	},
	{
		test: /\.js$/,
		//use: ["happypack/loader?id=happyBabel"],
		//把对.js 的文件处理交给id为happyBabel 的HappyPack的实例执行
		loader: 'happypack/loader?id=happyBabel',
		//不检查node_modules下的js文件
		exclude: "/node_modules/"
	}, {
		test: /\.(png|jpg|gif)$/,
		use: [{
			loader: "url-loader",//需要下载file-loader和url-loader
			options: {
				limit: 5 * 1024, //小于这个时将会已base64位图片打包处理
				outputPath: "images"	//图片文件输出的文件夹
			}
		}]
	},
	{
		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		loader: 'url-loader',
		options: {
			limit: 10000,
		}
	},
	{
		test: /\.html$/,
		use: ["html-withimg-loader"]//html中的img标签
	}, {
		test: /\.less$/,
		// 三个loader的顺序不能变
		// 不分离的写法
		// use: ["style-loader", "css-loader", "less-loader"]
		// 区别开发环境和生成环境
		use: process.env.NODE_ENV === "development" ? ["style-loader", "css-loader", "less-loader"] : extractTextPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "less-loader"],
			publicPath: "../"// css中的基础路径
		})
	}
];
module.exports = rules;