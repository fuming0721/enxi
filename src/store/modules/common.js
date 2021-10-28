import { getCurrencyList } from '@/api'

const SET_THEME = 'SET_THEME'
const GET_CURRENCY = 'GET_CURRENCY'
const common = {
  state: {
    theme: localStorage.getItem('e_theme') || 'white',
    currencyList: []
  },

  mutations: {
    [SET_THEME] (state, theme) {
      state.theme = theme
      localStorage.setItem('e_theme', theme)
    },

    [GET_CURRENCY] (state, list) {
      state.currencyList = list
    }
  },

  actions: {
    setTheme ({ commit }, theme) {
      commit(SET_THEME, theme)
    },

    async getCurrency ({ commit }) {
      const { page } = await getCurrencyList({ page: '1', limit: '500' })
      commit(GET_CURRENCY, page.list)
    }
  }
}

export default common
