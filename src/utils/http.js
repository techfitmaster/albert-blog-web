import axios from 'axios'
import {Message, Loading} from 'element-ui';
import notice from '../utils/notification'
// axios.defaults.baseURL = 'http://47.98.134.204:8888/';
axios.defaults.baseURL = 'http://127.0.0.1:80/';

import router from '../router/index'
import NProgress from "nprogress";

let loading        //定义loading变量


function startLoading() {    //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '拼命加载中...',
    background: 'rgba(0, 0, 0, 0.5)'
  })
}

function endLoading() {    //使用Element loading-close 方法
  loading.close()
}

// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
  // 加载
  // alert("111'")
  // startLoading()
  NProgress.start()
  // if (localStorage.eleToken)
  //     config.headers.Authorization = localStorage.eleToken
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
  NProgress.done()
  if (response.data.code !== 0) {
    notice.error(response.data.msg)
  }
  return response
}, error => {
  // 错误提醒
  NProgress.done()
  notice.error("服务器请求失败")
  // const { status } = error.response
  // if (status == 401) {
  //     Message.error('token值无效，请重新登录')
  //     // 清除token
  //     localStorage.removeItem('eleToken')

  //     // 页面跳转
  //     router.push('/login')
  // }

  return Promise.reject(error)
})

export default axios
