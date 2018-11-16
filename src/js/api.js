// 全局封装layui组件和elementui组件
var layer = layui.layer
    ,form = layui.form;

// 全局封装axios
import axios from  "../../node_modules/axios";
let urlboole = true;
let base_url = urlboole ? 'http://39.108.37.60:8008/' : 'http://112.74.181.229:8001/';
axios.defaults.baseURL= base_url;
axios.interceptors.request.use(
	config=>{
		config.headers = {
			"token": 'testest'
		}
	},
	error=>{
		return Promise.reject(err);
	}
)
axios.interceptors.response.use(
	response=>{
		return response;
	},
	error=>{
		return console.log(error);
	}
)


 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.patch(url,data)
           .then(response => {
             resolve(response);
           },err => {
             reject(err)
           })
    })
  }


/**
 * 封装fetch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params={}){
    return new Promise((resolve, reject)=>{
        axios.get(url, {
            params: params
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.post(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }


 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.put(url,data)
           .then(response => {
             resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }












// import ToastComponent from '@/components/toast'

// const Toast = {}
// // 注册Toast
// Toast.install = function (Vue) {
//     // 生成一个Vue的子类
//     // 同时这个子类也就是组件
//     const ToastConstructor = Vue.extend(ToastComponent)
//     // 生成一个该子类的实例
//     const instance = new ToastConstructor({
//         el: document.createElement('div')
//     })
//     // 将这个实例挂载在我创建的div上
//     // 并将此div加入全局挂载点内部
//     document.body.appendChild(instance.$mount().$el)
//     // 通过Vue的原型注册一个方法
//     // 让所有实例共享这个方法
//     Vue.prototype.$toast = (config) => {
//         console.log(config instanceof String)
//         if (typeof (config) === 'string' || typeof (config) === 'number') {
//             instance.message = config
//             instance.visible = true
//             instance.okClick = () => {
//                 instance.visible = false
//             }
//             instance.cancelClick = () => {
//                 instance.visible = false
//             }
//             return
//         }
//         instance.message = config.content
//         instance.visible = true
//         instance.okClick = config.onOk ? function () {
//             instance.visible = false
//             config.onOk()
//         } : function () {
//             instance.visible = false
//         }
//         instance.cancelClick = config.onCancel ? function () {
//             instance.visible = false
//             config.onCancel()
//         } : function () {
//             instance.visible = false
//         }
//     }
// }

// export default Toast
