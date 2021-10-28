<template lang='pug'>
  .person
    .person_nav
      van-nav-bar(title="个人中心" left-arrow fixed safe-area-inset-top @click-left='$router.back()')

    .person_data
      Cell(:isLink='true')
        Avatar(size='60' round)
      Cell(title='昵称' content='张三李四' :isLink='true')
      Cell(title='实名认证' :isLink='true')
      Cell(title='修改登录密码' :isLink='true')
      Cell(title='交易密码' content='未设置' :isLink='true')

      .person_text 保护账户安全，余额提现需设置交易密码

      Cell(title='绑定手机号' content='18522211112')
      Cell(title='绑定邮箱' content='11111@qq.com')
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    Avatar: () => import('@/components/Avatar'),
    IconLink: () => import('@/components/IconLink'),
    Cell: () => import('@/components/Cell')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['theme'])
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
.person
  min-height 100vh

  &_nav
    height 46px

  &_data
    min-height calc(100vh - 46px)

  &_text
    padding 15px
    color #999
    font-size 12px
</style>
