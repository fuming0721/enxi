import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'
import { setToken, getToken, removeToken } from '@/config/utils'

Vue.prototype.$global = new Vue()
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.timeout = 30000

axios.interceptors.request.use(config => {
  config.headers['token'] = getToken()
  return config
})

axios.interceptors.response.use(res => {
  if (res.status !== 200) {
    Toast('服务器内部错误')
    return Promise.reject(res)
  }
  const response = Object.assign({ code: -9999, msg: '请求失败' }, res.data)
  switch (response.code) {
    case 0:
      return Promise.resolve(response)
    case 401:
      // 需要登录
      removeToken()
      return router && router.currentRoute.path !== '/login' ? router.replace({ path: '/login', query: { redirect: router.currentRoute.path } }) : ''
    case 403:
      // 更新Token
      setToken(response.token)
      Vue.prototype.$global.$emit('auth-error')
      res.config.url = res.config._original_url
      if (res.config.data && (res.config._data_type || false)) {
        res.config.data = JSON.parse(res.config.data)
      }
      return axios(res.config)
    default:
      Toast(response.msg)
      if (response.msg.indexOf('Token') > -1) {
        removeToken()
      }
      return Promise.reject(response)
  }
})

export default axios
