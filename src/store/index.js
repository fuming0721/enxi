import Vue from 'vue'
import Vuex from 'vuex'
// import home from './modules/home'
// import status from './modules/status'
import common from './modules/common'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common
  },
  getters
})
