// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from './utils/http'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
/* eslint-disable no-new */
Vue.use(mavonEditor)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
