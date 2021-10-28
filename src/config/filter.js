export default {
  install (Vue) {
    Vue.filter('textCut', (v, num) => v.length <= num + 3 ? v : v.slice(0, num) + '...')
    Vue.filter('formatMoney', value => parseFloat(value).toFixed(2))
    Vue.filter('numFormat', (v, num) => v < 10000 ? v : parseFloat(v / 10000).toFixed(1) + '万')
  }
}
