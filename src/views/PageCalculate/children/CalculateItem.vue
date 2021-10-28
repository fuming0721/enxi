<template lang='pug'>
.calculateItem.pannelView
  .calculateItem_head
    .calculateItem_head_top
      .title 第20210928
      .data 1
        span T

    .calculateItem_head_bottom
      .title 封装规格：
        span 满封装(自出币)
      .data 挖矿中

  .calculateItem_mid
    .calculateItem_mid_item.first
      .num 27.3179904
      .label 总收益
    .calculateItem_mid_item
      .num 0
      .label 质押数量
    .calculateItem_mid_item.last
      .num 2022-10-10
      .label 到期时间

  .calculateItem_bottom
    van-button.calculateItem_bottom_btn.pay(size='small' v-if='activeTab') 续费
    van-button.calculateItem_bottom_btn(type='plain' size='small') 挖矿明细
    van-button.calculateItem_bottom_btn(type='plainGreen' size='small') 挖矿明细
</template>

<script>
export default {
  props: ['item', 'activeTab'],
  data () {
    return {
      active: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.calculateItem
  margin-top 10px

  &_head
    padding 15px

    &_top
      Flex(space-between)
      margin-bottom 10px

      .title
        font-size 15px

      .data
        font-size 16px
        span
          font-size 12px
          margin-left 3px

    &_bottom
      font-size 12px
      Flex(space-between)

      .title
        color #999

      .data
        color #00C1D2

  &_mid
    Flex(flex-start)
    padding 15px
    width 100%
    border-top 1px solid
    border-bottom 1px solid

    &_item
      &.first
        width 40%
        flex-shrink 0

      &.last
        margin-left auto
        text-align right

      .num
        font-size 13px
      .label
        margin-top 5px
        font-size 12px
        color #999

  &_bottom
    Flex(flex-end)
    padding 7px 10px

    &_btn
      width 72px
      height 28px
      margin-left 10px

      &.pay
        background-color #f4f4f4
        color #333
        border-radius 5px
</style>
