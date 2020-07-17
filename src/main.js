import Vue from 'vue'
import App from './App.vue'

// 导入axxios并挂载
import axios from 'axios'
Vue.prototype.$http = axios

// 依赖element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用element-ui
Vue.use(ElementUI)

// 自己写的导入路由
import router from '@/router/router.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
