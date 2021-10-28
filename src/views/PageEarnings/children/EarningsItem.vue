<template lang='pug'>
.earnings_item
  .earnings_item_head
    .time 2021-09-20
    .sn
      span.label 订单号：
      span SC2021914130742

  .earnings_item_body
    .item
      .item_label IPFS 1T算力封装-第五期
      .item_value 10T算力
    .item
      .item_label FIL 直接释放
      .item_text 15 FIL
    .item
      .item_label FIL 待释放产出
      .item_text 15 FIL

  .earnings_item_content
    van-collapse(v-model="active" accordion )
      van-collapse-item(title="产出明细" name="1" title-class='earnings_item_content_title')
        .earnings_item_content_list
          .item(v-for='item in 10')
            .date 2021-9-19
            .type 直线释放
            .count 15 FIL

</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      active: ''
    }
  },
  methods: {
    tabChange (item) {
      this.active = item.is
      // document.getElementById('id').scrollTo(0, 0)
    },

    channelChange (item) {
      this.activeTab = item.value
    }
  }
}
</script>

<style lang="stylus" scoped>
.earnings
  &_item
    margin-top 10px

    &_head
      Flex(space-between)
      font-size 12px
      height 36px
      padding 0 15px

      .label
        color #999

    &_body
      padding 10px 15px
      border-top 1px solid
      border-bottom 1px solid

      .item
        Flex(space-between)
        line-height 2
        font-size 12px

    &_content
      &>>>.van-collapse::after
        display none !important

      &>>>.van-collapse-item__content
        padding 2px 15px !important

      &_list
        .item
          Flex(space-between)
          padding 6px 0
          font-size 12px

          &:not(:last-child)
            border-bottom 1px solid

          .date
            width 36%

          .type
            margin-right auto

</style>
