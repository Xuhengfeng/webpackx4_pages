import "./index.scss";
import "../../js/api.js";
import {url} from '../../js/url.js'
import NProgress from '../../../node_modules/nprogress';
import '../../../node_modules/nprogress/nprogress.css';

console.log($)
NProgress.start();
setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1000);



url.MEMBER_TYPE()
url.QIANDUODUO()
url.test()
url.MENBER_INFO()



let tabUI = require("../../js/tab");
	tabUI.init();
	tabUI.tab($(".tab-wrap2"), {
		autoPlay: 2000,
		animate: true
	});





layer.msg('早上好 徐横峰');

var vm = new Vue({
    el: '#test',
    created(){

    },
    methods: {
        open() {

            this.$alert('这是一段内容', '标题名称', {
            confirmButtonText: '确定',
            callback: action => {
                this.$message({
                type: 'info',
                message: `action: ${ action }`
                });
            }
            });
        }
    }
})




