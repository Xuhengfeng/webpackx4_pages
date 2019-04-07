module.exports = {
  // 公共的样式
  // 第三方资源
  cdn: {
    css: [
      'public/css/normalize.css',
      'public/css/public.css',
      'public/css/jquery.fullPage.css'
    ],
    js: ['public/js/jquery-1.8.3.min.js', 'public/js/jquery.fullPage.min.js']
  },
  // 配置页面
  htmlArray: [
    { _html: 'index', title: '首页', chunks: ['index'] },
    { _html: 'example', title: '案例', chunks: ['example'] },
    { _html: 'service', title: '服务', chunks: ['service'] },
    { _html: 'about', title: '关于我们', chunks: ['about'] }
    // { _html: 'more/friendlink', title: '友情赞助', chunks: ['friendlink'] }
  ],
  // 配置多入口
  entrys: {
    index: './src/pages/index/index.js',
    example: './src/pages/example/index.js',
    service: './src/pages/service/index.js',
    about: './src/pages/about/index.js'
    // friendlink: './src/pages/more/friendlink/index.js',
  }
};
