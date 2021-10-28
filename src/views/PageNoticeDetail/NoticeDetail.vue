<template lang="pug">
  .noticeDetail
    .noticeDetail_nav
      van-nav-bar(title="通知详情" left-arrow :border='false' fixed safe-area-inset-top @click-left='$router.back()')

    Loading(v-if='loading')

    .noticeDetail_body(v-else)
      .noticeDetail_title {{info.title}}
      .noticeDetail_time {{info.createTime}}
      .noticeDetail_content.pannelView {{info.body}}

</template>

<script>
import { getNoticeDetail } from '@/api'
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
    async getInfo () {
      try {
        const { message } = await getNoticeDetail(this.id)
        this.info = message
        this.loading = false
      } catch {
        this.loading = false
      }
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.noticeDetail
  min-height 100vh

  &_nav
    height 46px

  &_body
    padding 20px

  &_title
    font-size 16px
    font-weight bold
    text-align center

  &_time
    font-size 12px
    text-align center
    color #999
    margin-top 10px

  &_content
    padding 10px
    margin-top 20px
    min-height 120px
    font-size 12px
</style>
