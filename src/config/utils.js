import cache from '@/config/cache'

// token Name
const tokenKey = () => {
  return '_EX_H5_APP_TK_'
}

// auth_id
const authId = () => {
  return '_EX_H5_APP_AUTH_ID_'
}

// 设置token
export const setToken = token => {
  cache.set(tokenKey(), token)
}

// 获取token
export const getToken = () => {
  return cache.get(tokenKey())
}

// 清除token
export const removeToken = () => {
  cache.remove(tokenKey())
}

// 设置auth_id
export const setAuthId = id => {
  cache.set(authId(), id)
}

// 获取auth_id
export const getAuthId = () => {
  return cache.get(authId())
}

// 清除auth_id
export const removeAuthId = () => {
  cache.remove(authId())
}

// 类型检查
const checkParamsType = (p) => {
  return Object.prototype.toString.call(p)
}

export const isObject = p => {
  return checkParamsType(p) === '[object Object]'
}
