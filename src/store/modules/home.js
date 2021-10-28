const SAVECURRENTTAB = 'SAVECURRENTTAB'// 保存当前tab

const state = {
  currentTab: 2
}

const getters = {
  activeName: state => state.currentTab
}

const mutations = {
  [SAVECURRENTTAB] (state, name) {
    state.currentTab = name
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
