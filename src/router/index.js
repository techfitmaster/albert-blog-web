import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404'
import Login from '@/views/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: ()=> import('@/views/layout/index')
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
