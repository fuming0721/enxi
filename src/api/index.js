import axios from './request'

// 登录
export const login = data => axios.post('mobile/login', data)

// 注册
export const register = data => axios.post('mobile/register', data)

// 获取用户信息
export const getUser = id => axios.get(`mobile/user/info/${id}`)

// 获取首页banner
export const getHomeBanner = () => axios.get('mobile/banner/list')

// 获取消息列表
export const getNotice = params => axios.get('mobile/message/list', { params })

// 获取消息详情
export const getNoticeDetail = id => axios.get(`mobile/message/info/${id}`)

// 获取首页数据
export const getHomeAllHashrate = () => axios.get('mobile/allHashrate')

// 获取市场列表
export const getProductList = data => axios.post('mobile/product/list', data)

// 获取产品信息
export const getProductInfo = id => axios.get(`mobile/product/info/${id}`)

// 获取币种列表
export const getCurrencyList = data => axios.post('mobile/currency/list', data)

// 获取提币记录列表
export const getHandlingChargeList = data => axios.post('mobile/handlingcharge/list', data)

// 获取我的收益列表
export const getEarnings = data => axios.post('mobile/income/list', data)
