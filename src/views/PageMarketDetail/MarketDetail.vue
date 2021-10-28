<template lang='pug'>
  .marketDetail
    .marketDetail_navBar
      .marketDetail_navBar_view
        van-icon(name="arrow-left" size='22' color='#fff' @click='goBack')
        .title 产品详情
        .blank(style="width: 20px")

    Loading(v-if='loading')
    .marketDetail_body(v-else)
      .goods
        .goods_top
          .goods_title
            Icon(name='/static/imgs/logo.png' :size='18')
            span {{info.name}}

          .goods_view
            .label 单份存力
            .value {{info.residualMiningNum | formatMoney}}{{info.residualMiningUnit}}

          .goods_view
            .label 单份金额
            .money
              span {{info.singleAmount | formatMoney}}
              .small CNY
              span  / 178.0000
              .small USDT

          .goods_view
            .label 合约周期
            .value {{info.contractPeriod}}天+{{info.contractPeriod}}天

          .goods_view
            .label 预计交付
            .value {{info.expectedDelivery}}

        .goods_bottom
          .label 产出分配比例
          .ratio 80%

      .pannelView.marketDetail_info
        .title - 产品特色 -

        .marketDetail_info_pannel
          .pannel
            .pannel_icon(style="backgroundColor: #FFF4F2")
              van-icon(name="discount" size='28' color='#DF8D79')
            .pannel_name 满存产出
            .pannel_text 交付即满存
              br
              | 无需等待封存

          .pannel
            .pannel_icon(style="backgroundColor: #FEF6E2")
              van-icon(name="eye" size='28' color='#F2974D')
            .pannel_name 产出透明
            .pannel_text 主网数据同步
              br
              | 产出公开透明

          .pannel
            .pannel_icon(style="backgroundColor: #F8F7FF")
              van-icon(name="setting" size='28' color='#B9B4F3')
            .pannel_name 顶级运维
            .pannel_text 专家运维服务
              br
              | 高级产出保障

      .marketDetail_des.pannelView
        .title - 说明 -

        .des {{info.proDescribe}}

      .marketDetail_submit
        van-button.submit_btn(type='res' block @click='payOrder') 立即下单
</template>

<script>
import { getProductInfo } from '@/api'
export default {
  props: ['id'],
  data () {
    return {
      loading: true,
      info: null
    }
  },

  created () {
    this.getInfo()
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
    },

    payOrder () {
      this.$router.push({ name: 'payOrder', params: { id: this.id } })
    }
  }
}
</script>

<style lang="stylus" scoped>
.marketDetail
  min-height 100vh
  padding-bottom 120px

  &_navBar
    height 130px

    &_view
      height 50px
      position fixed
      left 0
      right 0
      top 0
      width 100%
      Flex(space-between)
      padding 0 15px

      .title
        font-size 18px !important
        font-weight bold !important
        color #fff !important

  &_body
    padding 0 15px
    margin-top -80px

  .title
    font-size 15px
    text-align center

  &_info
    padding 10px

    &_pannel
      Flex(space-between)
      padding 20px 10px 0

      .pannel
        Flex()
        flex-direction column
        font-size 12px
        text-align center
        line-height 1.5

        &_icon
          width 40px
          height 40px
          border-radius 50%
          Flex()

        &_name
          font-weight 500
          margin 8px 0 5px
          font-size 13px

        &_text
          color #b3b3b3

  &_des
    border-radius 5px
    padding 10px
    margin-top 10px
    min-height 200px

    .des
      font-size 12px
      line-height 1.5
      color #999
      margin-top 20px

  &_submit
    position fixed
    bottom 0
    left 0
    right 0
    padding 20px
</style>
