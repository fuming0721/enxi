<template lang='pug'>
  .home
    .home_topBg
    .home_content
      .home_title 首页
      .home_swiper
        HomeSwiper

      van-notice-bar.home_notice(:color="theme == 'white' ? '#2944C7' : '#F9CE31'" :background="theme == 'white' ? '#fff' : '#1F282F'" left-icon="volume-o" :scrollable="false" v-if='notice.length')
        van-swipe.notice-swipe(vertical :autoplay="3000" :show-indicators="false")
          van-swipe-item(v-for='item in notice' :key='item.id' @click='noticeDetail(item)') {{item.title}}

      .home_view.home_nav
        IconLink.home_link(v-for='(item, index) in links' :key='index' :item='item')

      Bzz.home_view
      Bzz.home_view

</template>

<script>
import { mapGetters } from 'vuex'
import { getNotice, getHomeAllHashrate } from '@/api'
export default {
  components: {
    HomeSwiper: () => import('./children/HomeSwiper'),
    Bzz: () => import('./children/Bzz'),
    IconLink: () => import('@/components/IconLink')
  },

  data () {
    return {
      links: [
        { name: '邀请好友', icon: 'invite', link: '' },
        { name: '我的算力', icon: 'my_hash', link: '/calculate' },
        { name: '帮助中心', icon: 'help', link: '/notice' }
      ],
      notice: [],
      loading: true
    }
  },

  computed: {
    ...mapGetters(['theme'])
  },

  created () {
    this.getNotice()
    this.getData()
  },

  methods: {
    async getNotice () {
      const { page } = await getNotice()
      this.notice = page.list
    },

    async getData () {
      const res = await getHomeAllHashrate()
      console.log(res)
    },

    noticeDetail ({ id }) {
      this.$router.push(`/notice/${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  min-height 100%
  padding 15px
  &_topBg
    position absolute
    width 100%
    height 140px
    left 0
    right 0
    top 0
    z-index 0

  &_title
    font-size 18px
    color #fff
    font-weight bold
    text-align center
    padding-bottom 10px

  &_content
    z-index 1
    position relative

  &_notice
  &_view
    margin-top 10px
    border-radius 5px

  &_nav
    height 74px
    Flex(space-between)

  &_swiper
    height 139px

  &_link
    width 33%

  .notice-swipe
    height 40px
    line-height 40px
    font-size 13px
</style>
