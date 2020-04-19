import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('@/views/Home'),
      redirect: '/article',
      children: [
        {
          path: '/article',
          name: '文章',
          component: () => import('@/views/Article'),
          redirect: '/article/list/0/0',
          children: [
            {
              path: '/article/list/:categoryId/:key',
              name: '文章列表',
              component: () => import('@/views/ArticleList'),
            }, {
              path: '/article/:id',
              name: '文章详情',
              component: () => import('@/views/ArticleDetail'),
            }
          ]
        },
        {
          path: '/mine',
          name: '登录',
          component: () => import('@/views/Mine'),
        }
      ]
    },

    {
      path: '/login',
      name: '登录',
      component: () => import('@/views/Login'),
    },
    {
      path: '*',
      name: '/404',
      component: () => import('@/views/404'),
    },
    {
      path: '/write',
      name: '/写文章',
      component: () => import("@/views/Markdown")
    }
  ]
})
