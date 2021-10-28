<template lang="pug">
.goods(@click='toDetail')
  .goods_top
    .goods_title
      Icon(name='/static/imgs/logo.png' :size='18')
      span {{item.name}}

    .goods_view
      .label 单份存力
      .value {{item.residualMiningNum | formatMoney}}{{item.residualMiningUnit}}

    .goods_view
      .label 单份金额
      .money
        span {{item.singleAmount | formatMoney}}
        .small CNY
        span  / 178.0000
        .small USDT

    .goods_view
      .label 合约周期
      .value {{item.contractPeriod}}天+{{item.contractPeriod}}天

    .goods_view
      .label 剩余份额
      .value {{item.residualNum}}份

  .goods_bottom
    .label 预计交付
    .text {{item.expectedDelivery}}

</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    toDetail () {
      this.$router.push({ name: 'marketDetail', params: { id: this.item.id } })
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.goods
  width 100%
  margin-bottom 10px
  border-radius 5px

  &_top
    padding 12px 12px 5px 12px

  &_view
    padding 5px 0
    Flex(space-between)

    .label
      font-size 12px
      color #999

    .value
      font-size 13px

    .money
      display flex
      align-items flex-end

    .small
      font-size 12px
      transform scale(.8)

  &_title
    Flex(flex-start)
    margin-bottom 8px

    span
      font-size 14px
      margin-left 5px

  &_bottom
    Flex(space-between)
    padding 12px
    border-top 1px solid
    font-size 12px
    .label
      color #999

    .text
      font-size 13px
      color #666

      .num
        margin 0 3px
</style>
