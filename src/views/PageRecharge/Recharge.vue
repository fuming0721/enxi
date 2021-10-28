<template lang="pug">
  .recharge
    .recharge_nav
      van-nav-bar(title="充币" left-arrow :border='false' fixed safe-area-inset-top @click-left='back' @click-right='toHistory')
        template(#right)
          van-icon.iconChange(name="balance-list-o" size="22")

    .recharge_view
      .recharge_item.pannelView(@click='showSelect = true')
        .label {{selectToken}}
        .action
          span 币种选择
          van-icon.icon(name="arrow" size='18')

      .recharge_info.pannelView
        Img(src='/static/imgs/qr.png' width='156')

        van-button.saveQr(type='res') 保存二维码

        .title 充币地址

        .address 2x9b9912585cchjds3647ds5sdf78s7df4sd8f7

        van-button.copy(type='plain' size='small') 复制地址

      .recharge_warning 请勿向上述地址充值任何非BZZ资产，否则资产将不可找回。您充值上述地址后，需要整个网络节点的确认，12次网络确认后到账，12次网络确认后可提币。您的充值地址不会经常改变，可以重复充值;如有更改，我们会尽量通过网站公告或邮件通知您。请务必确认电脑及浏览器安全，防止信息被篡改或泄露

    van-action-sheet(v-model="showSelect" title="币种选择" get-container='body' close-on-popstate duration='.2')
      TokenList(@change='onTokenSelect')
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  data () {
    return {
      showSelect: false,
      selectToken: ''
    }
  },

  computed: {
    ...mapGetters(['theme'])
  },
  components: {
    WithdrawToken: () => import('./children/WithdrawToken'),
    WithdrawCash: () => import('./children/WithdrawCash')
  },

  created () {
    console.log(this.$route.query)
    this.selectToken = this.$route.query.token || '请选择'
  },

  methods: {
    // 返回
    back () {
      this.$router.back()
    },

    // 提现记录
    toHistory () {
      // this.$router.push('/withdraw_list')
    },

    // 选择币种
    onTokenSelect ({ name }) {
      this.selectToken = name
      this.showSelect = false
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.recharge
  min-height 100vh

  &_nav
    height 46px

  &_view
    padding 10px

  &_item
    padding 15px
    Flex(space-between, stretch)
    margin-bottom 10px

    .label
      font-size 16px
      font-weight bold
      flex-grow 1

    .action
      font-size 13px
      color #bbb
      Flex(space-between)
      padding-left 10px

      .icon
        margin-left 10px

  &_info
    padding 28px 0 22px
    Flex()
    flex-direction column

    .saveQr
      width 190px
      margin 24px 0 17px

    .title
      font-size 12px
      color #bbb
      margin-bottom 10px

    .address
      font-size 12px

    .copy
      margin-top 20px
      width 88px

  &_warning
    padding 20px 0
    font-size 12px
    color #999
    line-height 1.5
</style>
