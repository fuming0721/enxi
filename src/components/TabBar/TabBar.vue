<template lang="pug">
  van-tabbar.tabbar(v-model="active" :active-color="activeColor" :inactive-color="inactiveColor" route placeholder z-index='200' :border='false')
    van-tabbar-item(v-for='(item, index) in tabs' :to='item.link' :key='index')
      span.tabbar_text {{item.name}}
      template(#icon="props")
        img(:src="props.active ? `/static/imgs/tabbar/${item.icon + theme}.png` : `/static/imgs/tabbar/${item.icon}.png`")
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      size: 18,
      tabs: [
        { name: '首页', link: '/', icon: 'home_' },
        { name: '市场', link: '/market', icon: 'market_' },
        { name: '我的收益', link: '/earnings', icon: 'earnings_' },
        { name: '我的', link: '/my', icon: 'mine_' }
      ]
    }
  },
  computed: {
    ...mapGetters(['theme']),
    activeColor () {
      return this.theme === 'white' ? '#2944C7' : '#F9CE31'
    },
    inactiveColor () {
      return this.theme === 'white' ? '#bbb' : '#aaa'
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.tabbar
  &_text
    font-size 12px
</style>
