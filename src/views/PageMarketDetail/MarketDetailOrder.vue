<template lang='pug'>
  .order
    .order_nav
      van-nav-bar(title="详情" left-arrow :border='true' fixed safe-area-inset-top @click-left='$router.back()')

    .order_view.resView
      .order_view_item
        .lable 用户名
        .value 15110525654

      .order_view_item
        .lable 产品名
        .value IPFS 1T独立算力T+3【新手专享限时活动】

    .order_view.resView
      .order_view_item
        .lable 订单金额
        .text.resText2 178.0000 USDT

      .order_view_item
        .lable 购买份数
        .stepNum
          van-stepper(v-model="formData.count" integer input-width="32px" button-size="24px")

      .order_view_item
        .lable 到手存力
        .value 1TB

      .order_view_item
        .lable 合约周期
        .value 540天+540天

    .order_info 前540天合约周期届满前，用户可选择续期540天

    .order_view.resView(style="margin: 10px 0 0")
      .order_view_item
        .lable 选择支付方式

    van-radio-group.order_view.resView(v-model="formData.payType")
      .order_view_payType(v-for='item in payTypes')
        .money
          Icon(:name="`/static/imgs/money_${item.type}.png`" :size='24')
          span.BWColor {{item.name}}

        .count 可用：
          span.resText2 {{item.count.toFixed(3)}}
        van-radio(:name="item.select" :checked-color="theme=='white' ? '#2944C7' : '#F9CE31'")

    .order_view.resView(style="margin: 10px 0 0")
      .order_view_item
        .lable 官方质押

    .order_submit
      .order_submit_view.resView
        .order_submit_left 总计金额：
          span.resText2 178.00 USDT

        .order_submit_btn.resBg 立即支付
</template>

<script>
import { mapGetters } from 'vuex'
import { getProductInfo } from '@/api'

export default {
  props: ['id'],
  data () {
    return {
      loading: true,
      info: null,
      formData: {
        count: 1,
        payType: '0'
      },

      payTypes: [
        { type: 'cny', name: 'CNY', count: 0, select: '0' },
        { type: 'usdt', name: 'USDT', count: 0, select: '1' }
      ]
    }
  },

  computed: {
    ...mapGetters(['theme'])
  },

  methods: {
    goBack () {
      this.$router.back()
    },

    async getInfo () {
      try {
        const { product } = await getProductInfo(this.id)
        this.info = product
        this.loading = false
      } catch {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.order
  min-height 100vh

  &_nav
    height 46px

  &_info
    height 26px
    font-size 12px
    padding-left 15px
    Flex(flex-start)
    border 1px solid
    margin-top -10px

  &_view
    padding 5px 10px
    margin-bottom 10px

    &_item
      Flex(space-between)
      font-size 13px
      padding 10px 5px

      .lable
        color #999

    &_payType
      Flex(space-between)
      padding 10px
      border-top 1px solid

      .money
        width 40%
        flex-shrink 0
        font-size 12px
        Flex(flex-start)

        span
          margin-left 5px

      .count
        color #999999
        font-size 12px
        margin-right auto

  &_submit
    height 50px

    &_view
      position fixed
      height 50px
      bottom 0
      left 0
      right 0
      Flex(space-between)

    &_btn
      height 50px
      Flex()
      width 125px
      font-size 14px
      flex-shrink 0

      &:active
        opacity .8

    &_left
      padding-left 20px
      Flex(flex-start)
      height 100%
      flex-grow 1
      font-size 13px
      color #999

      span
        font-size 16px

</style>
