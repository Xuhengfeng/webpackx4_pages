import "./index.scss";
import "../../js/api.js";
import axios from  "../../../node_modules/axios";
import {url} from '../../js/url.js'

url.BROKER_BOMUS().then(res=>{
	console.log('res:',res);
})

console.dir(axios)
axios.get('http://suggest.taobao.com/sug?code=utf-8&q=商品关键字&callback=cb').then(res=>{
	console.log('res:',res);
})


// url.CHECK_PROJECT()
// url.BROKER_BOMUS()
// url.MY_INVESTMENT()



// let tabUI = require("../../js/tab");
// 	tabUI.init();
// 	tabUI.tab($(".tab-wrap2"), {
// 		autoPlay: 2000,
// 		animate: true
// 	});



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




