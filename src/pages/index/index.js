import "./index.scss";
import "../../assets/css/com_component.scss";
import "../../js/api.js";
import {url} from '../../js/url.js'
import NProgress from '../../../node_modules/nprogress';
import '../../../node_modules/nprogress/nprogress.css';

// 进度条
NProgress.start();
setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1000);

// 提示
layer.msg('早上好 徐横峰');

// 请求
url.MEMBER_TYPE()
url.QIANDUODUO()
url.test()
url.MENBER_INFO()


// 选项卡
let tabUI = require("../../js/tab");
	tabUI.init();
	tabUI.tab($(".tab-wrap2"), {
		autoPlay: 2000,
		animate: true
	});








   


var vm = new Vue({
    el: '#app',
    methods: {
        open() {
          this.$refs.xhf_alert.open();
        },

    }
})




