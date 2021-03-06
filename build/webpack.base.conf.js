const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const config = require('./config');

//消除冗余的css
const purifyCssWebpack = require('purifycss-webpack');
// html模板
const htmlWebpackPlugin = require('html-webpack-plugin');
//静态资源输出
const copyWebpackPlugin = require('copy-webpack-plugin');
//多核打包
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

//loader规则
const rules = require('./webpack.rules.conf.js');
// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name, chunks, title) {
  return {
    template: `./src/pages/${name}/index.html`,
    filename: `${name}.html`,
    // favicon: './favicon.ico',
    title: title,
    inject: 'body',
    hash: false, //开启hash  ?[hash]
    chunks: chunks,
    minify:
      process.env.NODE_ENV === 'development'
        ? false
        : {
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: true, //折叠空白区域 也就是压缩代码
            removeAttributeQuotes: true //去除属性引号
          }
  };
};

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: config.entrys,
  module: {
    rules: [...rules]
  },
  resolve: {
    //配置别名，在项目中可缩减引用路径
    alias: {
      '@': resolve('src'),
      public: resolve('src/public')
    }
  },
  //将外部变量或者模块加载进来
  //项目里配置了自动提取node_modules里用到的模块如jquery，也可以在原模板里面通过第三方cdn引入，又是另一种配置了。在 webpack.base.conf.js利配置externals后webpack就不会去打包配置模块
  externals: {
    // 'jquery': 'window.jQuery'
  },
  plugins: [
    // 全局暴露统一入口
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    //静态资源输出
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/public'),
        to: './public',
        ignore: ['.*']
      }
    ]),
    // 消除冗余的css代码
    new purifyCssWebpack({
      paths: glob.sync(path.join(__dirname, '../src/pages/*/*.html'))
    }),
    new HappyPack({
      //用id来标识happypack处理那里类文件
      id: 'happyBabel',
      //如何处理  用法和loader 的配置一样
      loaders: [
        {
          loader: 'babel-loader?cacheDirectory=true'
        }
      ],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true
    })
  ]
  // webpack4里面移除了commonChunksPulgin插件，放在了config.optimization里面,提取js， vendor名字可改
  // optimization: {
  // 	splitChunks: {
  // 		cacheGroups: {
  // 			vendor: {
  // 				// test: /\.js$/,
  // 				test: path.resolve(__dirname, '../node_modules'),
  // 				chunks: "initial", //表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
  // 				name: "vendor", //拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；
  // 				minChunks: 1,
  // 				reuseExistingChunk: true,
  // 				enforce: true
  // 			}
  // 		}
  // 	}
  // },
};

//自动生成html模板
config.htmlArray.forEach(element => {
  module.exports.plugins.push(
    new htmlWebpackPlugin({
      ...getHtmlConfig(element._html, element.chunks, element.title),
      ...config.cdn
    })
  );
});
