module.exports = {
  // 公共的第三方资源
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
    { _html: 'example', title: '案例', chunks: ['example'] }
    // { _html: 'login', title: '登录', chunks: ['login'] },
    // { _html: 'aboutus', title: '关于我们', chunks: ['aboutus'] },
    // { _html: 'more/service', title: '服务', chunks: ['service'] },
    // { _html: 'more/friendlink', title: '友情赞助', chunks: ['friendlink'] }
  ],
  // 配置多入口
  entrys: {
    index: './src/pages/index/index.js',
    example: './src/pages/example/index.js'
    // login: './src/pages/login/index.js',
    // aboutus: './src/pages/aboutus/index.js',
    // friendlink: './src/pages/more/friendlink/index.js',
    // service: './src/pages/more/service/index.js',
  }
};
