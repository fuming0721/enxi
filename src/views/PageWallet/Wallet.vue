<template lang="pug">
  .wallet
    .wallet_nav
      van-nav-bar(title="我的钱包" left-arrow :border='false' fixed safe-area-inset-top @click-left='$router.back()')

    Loading(v-if='loading')

    van-pull-refresh(v-model="refreshing" @refresh="onLoad" v-else)
      .wallet_data
        .wallet_info
          .wallet_title 账户资产折合（USDT）
          .money
            span.count {{info.money}}
            span ≈0.00 CNY

        .title 资产统计

        .wallet_list
          WalletItem(v-for='item in list' :key='item.name' :item='item')

</template>

<script>
export default {

  data () {
    return {
      loading: true,
      refreshing: false,
      info: {
        money: '0.00'
      },
      list: [
        { name: 'BZZ', icon: 'bzz' },
        { name: 'FIL', icon: 'fil' },
        { name: 'USTD', icon: 'ustd' },
        { name: 'BTC', icon: 'btc' },
        { name: 'ETH', icon: 'eth' },
        { name: 'LTC', icon: 'ltc' },
        { name: 'ICP', icon: 'icp' }
      ]
    }
  },

  components: {
    WalletItem: () => import('./children/WalletItem')
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
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.wallet
  min-height 100vh

  &_nav
    height 46px

  &_data
    min-height calc(100vh - 46px)

  &_title
    font-size 14px
    margin-bottom 15px

  &_info
    background-image url('/static/imgs/card.png')
    height 196px
    background-size cover
    Flex()
    flex-direction column
    color #fff

    .money
      Flex()

    .count
      font-size 20px
      font-weight bold
      color #fff
      margin-right 5px

  .title
    font-size 16px
    font-weight bold
    padding 0 15px 5px

  &_list
    padding 15px

</style>
