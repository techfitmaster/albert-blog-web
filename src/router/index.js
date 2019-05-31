import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home/index'
import NotFound from '@/views/404'
import Login from '@/views/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: '首页',
      component: Home
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '*',
      name: '/404',
      component: NotFound
    },
  ]
})
