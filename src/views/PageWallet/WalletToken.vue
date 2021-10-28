<template lang="pug">
  .token
    .token_nav
      van-nav-bar(:title="id" left-arrow :border='false' fixed safe-area-inset-top @click-left='$router.back()')

    Loading(v-if='loading')

    van-pull-refresh(v-model="refreshing" @refresh="onLoad" v-else)
      .token_data
        .token_info
          .token_info_title 3232 ≈ $121.00

          .token_info_data
            .left
              span 可用
              .num 212132

            .right
              span 可用
              .num 20

        .title 财务记录

        .token_list
          WithdrawItem(v-for='item in 9' :key='item' :item='item')

      .token_btns
        van-button.btn.withdraw(@click='toWithdraw') 提现
        van-button.btn.recharge(@click='toRecharge') 充值

</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      loading: true,
      refreshing: false,
      info: {
        money: '0.00'
      }
    }
  },

  components: {
    WithdrawItem: () => import('@/components/WithdrawItem')
  },

  created () {
    this.onLoad()
  },

  methods: {
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.info = {
            money: '22200.00'
          }
          this.refreshing = false
        }

        this.loading = false
      }, 1000)
    },

    toWithdraw () {
      this.$router.push(`/withdraw?token=${this.id}`)
    },
    toRecharge () {
      this.$router.push(`/recharge?token=${this.id}`)
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.token
  min-height 100vh

  &_nav
    height 46px

  &_data
    min-height calc(100vh - 46px)
    border-top 1px solid
    padding-bottom 50px

  &_info
    padding 20px

    &_title
      font-size 16px
      margin-bottom 20px

    &_data
      Flex(space-between)
      color #999
      font-size 13px

      .left
        Flex(center, flex-start)
        flex-direction column

      .right
        Flex(center, flex-end)
        flex-direction column

      .num
        margin-top 5px
        font-size 15px
        font-weight bold

  .title
    font-size 16px
    font-weight bold
    padding 10px 15px 5px

  &_list
    padding 15px

  &_btns
    Flex()
    height 60px
    position fixed
    width 100%
    left 0
    bottom 0
    right 0

    .btn
      width 122px
      border none
      color #fff
      border-radius 5px
      margin 0 25px

    .withdraw
      background-color #2944C7

    .recharge
      background-color #2EBD89

</style>
