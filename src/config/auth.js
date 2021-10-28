import Vue from 'vue'
// import axios from '@/api/request'
// import cache from './cache'
import { setToken, getToken, removeToken, setAuthId, getAuthId, removeAuthId } from './utils'
// import wx from 'weixin-jsapi'

import { login, getUser } from '@/api'

const AuthPlugin = Vue.extend({
  computed: {
    isReady () {
      return this.ready
    },

    isError () {
      return this.error
    },

    isAnonymous () {
      return this.anonymous
    },

    isLoggedIn () {
      return this.loggedIn
    }
  },

  data () {
    return {
      ready: false,
      error: false,
      anonymous: true,
      loggedIn: getToken(),
      profile: null
    }
  },

  created () {
    this.$global.$on('auth-error', () => {
      this.clear()
    })

    if (getToken()) {
      this.getUser()
    } else {
      this.ready = true
    }
  },

  methods: {
    clear () {
      this.error = false
      this.ready = true
      this.anonymous = true
      this.loggedIn = getToken()
      this.profile = null
    },

    guard (to, from, next) {
      if (to.matched.some(record => record.meta.requiresAuth) && !getToken()) {
        this.clear()
        next({ path: '/login', query: { redirect: to.fullPath } })
      } else {
        next()
      }
    },

    receiveUserInfo ({ user }) {
      this.profile = user
      this.anonymous = false
      this.loggedIn = true
      this.ready = true
    },

    updateUserInfo ({ data }) {
      this.profile = { ...data.user }
    },

    receiveError (error) {
      this.error = true
      this.ready = true
      throw error
    },

    getUser () {
      getUser(getAuthId())
        .then(this.receiveUserInfo)
        .catch(this.receiveError)
    },

    updateUser () {
      getUser(getAuthId())
        .then(this.updateUserInfo)
        .catch(this.receiveError)
    },

    async login (data) {
      try {
        const loginRes = await login(data)
        setToken(loginRes.token)
        setAuthId(loginRes.id)
        const userInfo = await getUser(loginRes.id)
        this.receiveUserInfo(userInfo)
        return loginRes
      } catch (error) {
        this.receiveError(error)
      }
    },

    logout () {
      removeToken()
      removeAuthId()
      this.clear()
      window.location.href = window.location.origin
      location.assign('https://')
    }
  }
})

export default {
  install (Vue, { router }) {
    const $auth = new AuthPlugin()
    Vue.prototype.$auth = $auth
    if (router) {
      router.beforeEach($auth.guard)
    }
  }
}
