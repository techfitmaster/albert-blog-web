// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import router from './router'
import axios from './utils/http'
import notice from "./utils/notification";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vuex from 'vuex'
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.prototype.$notice = notice
Vue.use(Vuex)
import mavonEditor from 'mavon-editor'
// import marked from 'marked'
import 'mavon-editor/dist/css/index.css'
/* eslint-disable no-new */

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.use(mavonEditor)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
