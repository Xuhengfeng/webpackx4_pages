/**  
 * @author xhf
 * @desc 弹窗组件
 */
Vue.component('xhf_alert', {
   template: `
      <div id="alert" v-if="isShow">
          <div class="alert_content">
              <div class="alert_title">{{title}}</div>
              <div class="alert_body">{{content}}</div>
              <div class="alert_btn">              
                    <button @click="comfirm()">确定</button>
                    <button @click="cancel()">取消</button>
              </div>
              <div class="close" @click="close()">X</div>
          </div>
      </div>`,
    props: {
        title: {
            type: String,
            default: '提示'
        },
        content: {
            type: String,
            default: '欢迎使用xhf组件!'
        }
    },
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        close() {
           this.isShow = false;
        },
        open() {
            this.isShow = true;
        },
        cancel() {
            this.close();
        },
        comfirm() {
            this.close();
        }
    }
});