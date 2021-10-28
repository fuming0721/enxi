<template lang="pug">
  .withdraw
    .withdraw_nav
      van-nav-bar(title="提币" left-arrow :border='false' fixed safe-area-inset-top @click-left='back' @click-right='toHistory')
        template(#right)
          van-icon.iconChange(name="balance-list-o" size="22")

    van-tabs.withdraw_tabs(type="card" :color="theme=='white' ? '#2944C7' : '#F9CE31'" title-inactive-color='#000' :title-active-color="theme=='white' ? '#fff' : '#000'")
      van-tab(title="币")
        WithdrawToken

      van-tab(title="CNY")
        WithdrawCash
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['theme'])
  },
  components: {
    WithdrawToken: () => import('./children/WithdrawToken'),
    WithdrawCash: () => import('./children/WithdrawCash')
  },

  methods: {
    // 返回
    back () {
      this.$router.back()
    },

    // 提现记录
    toHistory () {
      this.$router.push('/withdraw_list')
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.withdraw
  min-height 100vh

  &_nav
    height 46px

  &_tabs
    &>>>.van-tabs__wrap
      width 150px
      margin 12px auto 0

    &>>>.van-tabs__nav--card
      margin 0
      border-radius 5px
</style>
