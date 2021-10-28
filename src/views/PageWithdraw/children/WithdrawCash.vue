<template lang="pug">
.withdrawForm

  .withdrawForm_item.pannelView
    van-field(v-model="formData.address" label="" placeholder="姓名/公司名称" clearable)

  .withdrawForm_item.pannelView
    van-field(v-model="formData.address" label="" placeholder="银行卡号" clearable)

  .withdrawForm_item.pannelView
    van-field(v-model="formData.address" label="" placeholder="开户行" clearable)

  .withdrawForm_item.pannelView
    .label
      .span 居间发票
        span.subDes （发票金额5000 * 50%）

      van-uploader.uploader(:after-read="afterRead")

    .action2
      Icon(:name="`/static/imgs/ticket_${theme}.png`" :size='28')
      span 模板

  .withdrawForm_item.pannelView
    .label
      .span 居间合同编号
      van-field(v-model="formData.address" label="" placeholder="输入手续费" clearable style="marginBottom: -4px")
    .action
      van-button(type='plain' size='small') 申请合同

  .withdrawForm_item.pannelView
    .label
      .span 提现金额
        span.subDes （5000 * 50%/增值税*15%）
      van-field(v-model="formData.address" label="" placeholder="输入手续费" clearable style="marginBottom: -4px")

  .withdrawForm_warning
    .text 提现必须开具居间发票签署居间合同
    .text CNY今天需要扣除15%增值税金额

  .withdrawForm_submit
    .withdrawForm_submit_info
      span 到账数量
      .count 5000*0.75=3750

    van-button(type="res" block) 提现
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['theme'])
  },
  data () {
    return {
      formData: {
        address: ''
      }
    }
  },

  methods: {
    afterRead (file) {}
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.withdrawForm
  padding 10px
  width 100%

  .uploader
    &>>>.van-uploader__upload
      margin 0
      width 40px
      height 40px

  &_item
    padding 15px
    Flex(space-between, stretch)
    margin-bottom 10px

    .label
      font-size 15px
      font-weight bold
      flex-grow 1

      .span
        margin-bottom 10px

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
      padding-left 10px

      .button
        font-size 15px
        font-weight bold

    &>>>.van-cell
      background-color transparent
      padding 0
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
