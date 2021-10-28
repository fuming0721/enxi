// 手机号
export const isMobile = n => {
  return /^1[3456789]\d{9}$/.test(n)
}

// 注册密码
export const validatePass = n => {
  return /^[a-zA-Z0-9]{6,15}$/.test(n)
}

// email
export const isEmail = n => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(n)
}
