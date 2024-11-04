import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from '@/store'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 引入时间格式化库
import timeFormater from "time-formater";
Vue.prototype.$moment = timeFormater;
Vue.use(ElementUI)
// 引入组件
import AdminBan from '@/components/admin'
import ReaderBan from '@/components/reader'
Vue.component(AdminBan.name,AdminBan)
Vue.component(ReaderBan.name,ReaderBan)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
