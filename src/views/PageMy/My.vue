<template lang='pug'>
  .my
    .my_set(@click='themeChange')
      Icon(:name="`/static/imgs/set_${theme}.png`" :size='24')

    .my_header
      Avatar(size='62' round)

      .my_info
        .my_info_name {{$auth.profile.nickName}}
          span {{$auth.profile.account}}
        .my_info_tel {{$auth.profile.phone}}

    .my_body
      .pannelView.my_body_data
        .my_body_data_item
          .money ￥0.00
          .sub 总资产折合(USDT)

        .my_body_data_item
          .money ￥0.00
          .sub 昨日总产出(估算）

      .pannelView.my_view
        .my_title 资产管理

        .my_view_body
          .my_view_body_item
            IconLink(:item='withdraw')

          .my_view_body_item
            IconLink(:item='recharge')

      .pannelView
        .my_title 我的服务
        .my_list
          .my_list_item(v-for='item in myService')
            IconLink(:item='item')
          .my_list_item
            IconLink(:item="{ icon: 'logout', name: '安全退出' }" @click='logout')

      .pannelView
        .my_title 其他服务
        .my_list
          .my_list_item(v-for='item in otherService')
            IconLink(:item='item')

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    Avatar: () => import('@/components/Avatar'),
    IconLink: () => import('@/components/IconLink')
  },
  data () {
    return {
      withdraw: { icon: 'withdraw', name: '提现', link: '/withdraw' },
      recharge: { icon: 'recharge', name: '充值', link: '/recharge' },
      myService: [
        { icon: 'wallet', name: '我的钱包', link: '/wallet' },
        { icon: 'my_hash', name: '我的算力', link: '/calculate' },
        { icon: 'order', name: '订单管理', link: '' },
        { icon: 'help', name: '帮助中心', link: '/notice' },
        { icon: 'myEarnings', name: '我的收益', link: '/earnings' },
        { icon: 'person', name: '个人中心', link: '/personal' }
        // { icon: 'logout', name: '安全退出' }
      ],
      otherService: [
        { icon: 'invite', name: '邀请好友', link: '' },
        { icon: 'service', name: '专属服务', link: '' },
        { icon: 'aboutus', name: '关于我们', link: '' }
      ]
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },
  activated () {
    // this.$auth.updateUser()
  },
  created () {
    // window.addEventListener('scroll', this.scrollLocation)
  },
  methods: {
    change (v) {
      this.active = v.id
      window.scrollTo(0, 0)
    },
    scrollLocation () {
      let octy = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) * 0.005
      this.navOpacity = octy >= 1 ? 1 : octy
    },
    themeChange () {
      this.$store.dispatch('setTheme', this.theme === 'white' ? 'black' : 'white')
    },

    logout () {
      this.$dialog.confirm({
        title: '确定退出吗'
      })
        .then(() => {
          this.$auth.logout()
        })
        .catch(() => {
        // on cancel
        })
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.showNav)
  }
}
</script>

<style lang="stylus" scoped>
.pannelView
  margin-bottom 10px
.my
  min-height 100%
  background-size 100%
  position relative
  padding-bottom 10px

  &_title
    font-size 15px
    padding 10px 20px 5px

  &_set
    position absolute
    top 25px
    right 20px

  &_header
    padding 0 20px
    Flex(flex-start)
    height 140px
    padding-top 20px

  &_info
    margin-left 20px

    &_name
      color #fff
      font-size 19px
      font-weight bold
      margin-bottom 10px

      span
        font-size 15px
        font-weight normal
        margin-left 15px

    &_tel
      font-size 13px

  &_body
    padding 0 15px

    &_data
      padding 24px 0
      Flex()

      &_item
        Flex()
        flex-direction column
        width 50%

        &:not(:last-child)
          border-right 1px solid #e5e5e5

        .money
          font-size 16px
          margin-bottom 10px
        .sub
          font-size 12px

  &_view
    &_body
      Flex()
      padding 10px 0

      &_item
        Flex()
        width 50%

        &:not(:last-child)
          border-right 1px solid

  &_list
    display flex
    flex-wrap wrap
    padding-bottom 5px

    &_item
      width 25%
      padding 10px 0

</style>
