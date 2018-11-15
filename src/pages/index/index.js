// import "./index.scss";
// let tabUI = require("../../js/tab");
// console.log('121');
// tabUI.init();
// tabUI.tab($(".tab-wrap2"), {
// 	autoPlay: 2000,
// 	animate: true
// });




import {get, post} from '../../js/api.js';
import * as obj from '../../js/url.js';


get(obj.default.MONEYNFIVE).then(res=>{
	console.log(res)
}).catch(error=>{console.log(error)})


