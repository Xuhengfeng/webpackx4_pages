// // 内容类型
// export const ContentType = {
//     JSON : "application/json;charset=UTF-8",
//     FORM : "application/x-www-form-urlencoded; charset=UTF-8"
// };

// // http方法
// export const HttpMethod = {
//     GET : "GET",
//     POST : "POST",
//     PUT : "PUT",
//     PATCH : "PATCH",
//     DELETE : "DELETE"
// };

// const getHeaders = () => {
//     // const token = Cookies.get(COOKIE_TOKEN);
//     const token = 'xuhengfeng';
//     return {
//         "Content-Type": ContentType.JSON,
//         "Token": token
//     }
// };

// // get封装
// export const get = (url,body = null) => {
//     if(body !== null){
//         url = new URL(url);
//         Object.keys(body).forEach(key => url.searchParams.append(key, body[key]));
//     }
//     const promise = fetch(url,{
//         method : HttpMethod.GET,
//         headers: getHeaders(),
//     });
//     return handleFetch(promise);
// };

// // post封装
// export const post = (url,body) => {
//     const promise = fetch(url,{
//         method : HttpMethod.POST,
//         headers: getHeaders(),
//         body : JSON.stringify(body)
//     });
//     return handleFetch(promise);
// };

// // 检查status
// export const checkStatus = response => {
//     if(response.status === 200){
//         return response.json();//200则转换为对象
//     }
//     else {
//         throw new Error();
//     }
// };

// // 处理请求
// const handleFetch = promise => {
//     return promise
//         .then(response => checkStatus(response))
//         .catch(() => dispatch(error(FAIL_RESULT.message)))
// };


var layer = layui.layer
    ,form = layui.form;

layer.msg('Hello fasdfasd ');


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



import axios from  "../../node_modules/axios";
let urlboole = true;
let base_url = urlboole ? 'www.baidu.com' : 'www.sogou.com';
axios.defaults.baseURL= base_url;
axios.interceptors.request.use(
	config=>{
		config.headers = {
			"token": 'cxx'
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
		
	}
)



console.dir(axios);