<template lang='pug'>
  .register
    .register_bar
      van-nav-bar(title="注册" left-arrow fixed safe-area-inset-top @click-left='$router.back()')

    .register_nav
      .register_nav_item(v-for='item in navList' :class="{active: active==item.is}" @click='tabChange(item)') {{item.name}}

    .register_view
      component(:is="active")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      navList: [
        { is: 'RegisterByMobile', name: '手机号注册' },
        { is: 'RegisterByEmail', name: '邮箱注册' }
      ],
      active: 'RegisterByMobile'
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },

  components: {
    RegisterByMobile: () => import('./children/RegisterByMobile'),
    RegisterByEmail: () => import('./children/RegisterByEmail')
  },

  methods: {
    tabChange (item) {
      this.active = item.is
    }
  }
}
</script>

<style lang="stylus" scoped>
.register
  min-height 100vh

  &_bar
    height 46px

  &_view
    padding 0 20px

  &_nav
    margin 20px 30px
    Flex(flex-start)
    font-size 14px
    width 100%
    height 40px

    &_item
      color #bbb
      margin-right 30px
      height 100%
      Flex()
      border-bottom 2px solid transparent

</style>
