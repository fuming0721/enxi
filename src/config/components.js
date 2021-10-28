export default {
  install (Vue) {
    Vue.component('Icon', () => import('@/components/Icon'))
    Vue.component('Img', () => import('@/components/Img'))
    Vue.component('Loading', () => import('@/components/Loading/Loading'))
    Vue.component('LinkButton', () => import('@/components/LinkButton'))
    Vue.component('Empty', () => import('@/components/Empty'))
    Vue.component('TokenList', () => import('@/components/TokenList'))
  }
}
