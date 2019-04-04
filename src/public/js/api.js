// 全局封装layui组件和elementui组件
var layer = layui.layer
    ,form = layui.form;

// 全局封装axios
import axios from  "../../node_modules/axios";
let urlboole = true;
// let base_url = urlboole ? 'http://39.108.37.60:8008/' : 'http://112.74.181.229:8001/';
// axios.defaults.baseURL= base_url;
axios.interceptors.request.use(
	config=>{
		config.headers = {
			"token": ''
    }
    return config; 
	},
	error=>{
		return Promise.reject(err);
	}
)
axios.interceptors.response.use(
	response=>{
		return response;
	},
	err=>{
		if (err && err.response) {
      switch (err.response.status) {
          case 400:
              layer.msg('错误请求');
              break;
          case 401:
              layer.msg('未授权，请重新登录');
              break;
          case 403:
              layer.msg('拒绝访问');
              break;
          case 404:
              layer.msg('请求错误,未找到该资源');
              break;
          case 405:
              layer.msg('请求方法未允许');
              break;
          case 408:
              layer.msg('请求超时');
              break;
          case 500:
              layer.msg('服务器端出错');
              break;
          case 501:
              layer.msg('网络未实现');
              break;
          case 502:
              layer.msg('网络错误');
              break;
          case 503:
              layer.msg({
                  message: '服务不可用',
                  position: 'bottom'
              });
              break;
              layer.msg('网络超时');
              break;
          case 505:
              layer.msg('http版本不支持该请求');
              break;
          default:
              layer.msg(`连接错误${err.response.status}`);
      }
    } else {
        layer.msg("连接到服务器失败");
    }
    return Promise.resolve(err.response)
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
           .then(res => {
             resolve(res);
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
           .then(res => {
             resolve(res);
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
           .then(res => {
             resolve(res);
           },err => {
             reject(err)
           })
    })
  }












// import layer.msgComponent from '@/components/layer.msg'

// const layer.msg = {}
// // 注册layer.msg
// layer.msg.install = function (Vue) {
//     // 生成一个Vue的子类
//     // 同时这个子类也就是组件
//     const layer.msgConstructor = Vue.extend(layer.msgComponent)
//     // 生成一个该子类的实例
//     const instance = new layer.msgConstructor({
//         el: document.createElement('div')
//     })
//     // 将这个实例挂载在我创建的div上
//     // 并将此div加入全局挂载点内部
//     document.body.appendChild(instance.$mount().$el)
//     // 通过Vue的原型注册一个方法
//     // 让所有实例共享这个方法
//     Vue.prototype.$layer.msg = (config) => {
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

// export default layer.msg
