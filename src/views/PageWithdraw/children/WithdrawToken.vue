<template lang="pug">
.withdrawForm

  .withdrawForm_item.pannelView(@click='showSelect = true')
    .label {{selectToken}}
    .action
      span 币种选择
      van-icon.icon(name="arrow" size='18')

  .withdrawForm_item.pannelView
    .label 提币类型
    .action
      span.res 常规提现
      van-icon.icon(name="arrow" size='18')

  .withdrawForm_item.pannelView
    .label
      .span(style='fontSize: 15px') 提币地址
      van-field(v-model="formData.address" label="" placeholder="输入或者长按粘贴地址" clearable)

  .withdrawForm_item.pannelView
    .label
      .span(style='fontSize: 15px') 数量
        span.subDes （可用
          span.count 0
          | BZZ）
      van-field(v-model="formData.address" label="" placeholder="输入或者长按粘贴地址" clearable)

    .action2
      .button 全部
      span BZZ

  .withdrawForm_item.pannelView
    .label
      .span(style='fontSize: 15px') 手续费
      van-field(v-model="formData.address" label="" placeholder="输入手续费" clearable)
    .action BZZ

  .withdrawForm_warning
    .text 最小提币数量为：5 BZZ
    .text 请务必确认网络环境安全，防止信息被篡改或泄露

  .withdrawForm_submit
    .withdrawForm_submit_info
      span 到账数量
      .count 0.00BZZ

    van-button(type="res" block) 提现

  van-action-sheet(v-model="showSelect" title="币种选择" get-container='body' close-on-popstate duration='.2')
    TokenList
</template>

<script>
export default {
  data () {
    return {
      formData: {
        address: ''
      },

      selectToken: '',

      showSelect: false
    }
  },

  created () {
    console.log(this.$route.query)
    this.selectToken = this.$route.query.token || '请选择'
  },

  methods: {
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.withdrawForm
  padding 10px
  width 100%

  &_item
    padding 15px
    Flex(space-between, stretch)
    margin-bottom 10px

    .label
      font-size 16px
      font-weight bold
      flex-grow 1

      .subDes
        color #bbb
        font-weight normal
        font-size 12px

        .count
          margin 0 3px

    .action
      font-size 13px
      color #bbb
      Flex(space-between)
      padding-left 10px

      .icon
        margin-left 10px

    .action2
      font-size 12px
      color #bbb
      Flex(space-between, flex-end)
      flex-direction column
      padding-bottom 4px
      padding-left 10px

      .button
        font-size 15px
        font-weight bold

    &>>>.van-cell
      background-color transparent
      padding 0
      margin-top 10px
      font-weight normal

  &_warning
    font-size 12px
    color #bbb
    line-height 2
    padding 15px 0

  &_submit
    position fixed
    bottom 0
    left 0
    right 0
    padding 10px 10px 20px

    &_info
      Flex(space-between)
      margin-bottom 10px
      color #bbb

      .count
        font-size 16px
        font-weight bold

</style>
