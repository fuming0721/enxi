<template lang="pug">
  .notice
    .notice_nav
      van-nav-bar(title="通知公告" left-arrow :border='false' fixed safe-area-inset-top @click-left='$router.back()')

      van-tabs.tabs(v-model="active" line-width='56' line-height='2' :color="theme == 'white' ? '#2944C7' : '#F9CE31'" title-inactive-color='#999' :title-active-color="theme == 'white' ? '#333' : '#fff'" @click='changeTab')
        van-tab(v-for='item in tabs' :title="item.name" :key='item.value')

    .notice_list
      van-pull-refresh(v-model="refreshing" @refresh="onRefresh")
        van-list(v-model="loading" :finished="finished" :finished-text="list.length && page > 1 ? '没有更多了' : ''" @load="onLoad")
          .list(v-if='list.length')
            template(v-for="item in list")
              NoticeItem(:key="item.id" :item='item')

          Empty(:listLength='list.length' :finished='finished')

</template>

<script>
import { mapGetters } from 'vuex'
import { getNotice } from '@/api'
export default {
  computed: {
    ...mapGetters(['theme'])
  },

  components: {
    NoticeItem: () => import('./children/NoticeItem')
  },

  data () {
    return {
      active: 0,
      tabs: [
        { name: '最新公告', value: 0 },
        { name: '常见问题', value: 1 },
        { name: '新手必读', value: 2 },
        { name: '交易相关', value: 3 }
      ],
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1
    }
  },

  methods: {
    async onLoad () {
      const params = {
        type: this.active,
        page: this.page
      }
      const { page } = await getNotice(params)

      if (this.refreshing) {
        this.list = []
        this.refreshing = false
      }

      const list = page.list || []
      this.list = this.page > 1 ? [...this.list, ...list] : list

      page.currPage >= page.totalPage ? this.finished = true : this.page += 1
      this.loading = false
    },

    onRefresh () {
      // 清空列表数据
      this.finished = false
      this.page = 1
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },

    changeTab () {
      this.loading = true
      this.page = 1
      this.onLoad()
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.notice
  min-height 100vh

  &_nav
    height 92px

  &_list
    padding 10px

  .empty
    height calc(100vh - 46px)
    padding-top 15vh

  .list
    min-height calc(100vh - 200px)

  .tabs
    position fixed
    top 46px
    width 100%
    z-index 90
    border-top 1px solid

</style>
