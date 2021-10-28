<template lang='pug'>
.earnings
  Nav(:tabs='navList' :active='active' @change='tabChange')

  van-pull-refresh(v-model="refreshing" @refresh="onRefresh")
    .earnings_main
      .earnings_bar
        LinkButton(v-for='item in tabs' :key='item.value' :class="{active: activeTab==item.value}" :item='item' @click='channelChange')

      .earnings_data
        .label 已释放总产出
        .data 0.000000000000008788

        .label.label2 已释放总产出
        .data 0.000000000000008788

      van-list.earnings_list(v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad")
        template(v-for='item in list')
          EarningsItem(:item='item')
</template>

<script>
import { getEarnings } from '@/api'
export default {
  data () {
    return {
      navList: [
        { is: 0, name: 'Fil' },
        { is: 1, name: 'BZZ' }
      ],
      active: 0,

      tabs: [
        { name: '我的收益', value: 0 },
        { name: '邀请收益', value: 1 }
      ],
      activeTab: 0,

      loading: false,
      finished: false,
      refreshing: false,

      list: [],
      page: 1
    }
  },
  components: {
    Nav: () => import('@/components/Nav'),
    EarningsItem: () => import('./children/EarningsItem')
  },

  methods: {
    tabChange (item) {
      this.active = item.is
      // document.getElementById('id').scrollTo(0, 0)
    },

    channelChange (item) {
      this.activeTab = item.value
      this.onRefresh()
    },

    async onLoad () {
      const params = {
        page: String(this.page),
        type: this.activeTab
      }
      this.loading = true
      try {
        const { page } = await getEarnings(params)
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }

        const list = page.list || []
        this.list = this.page > 1 ? [...this.list, ...list] : list

        page.currPage >= page.totalPage ? this.finished = true : this.page += 1
        this.loading = false
      } catch {
        this.loading = false
        this.finished = true
        this.refreshing = false
      }
    },

    onRefresh () {
      this.finished = false
      this.page = 1
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style lang="stylus" scoped>
.earnings
  min-height 100%

  &_main
    padding 10px 0
    min-height calc(100vh - 44px)

  &_bar
    padding 0 10px
    Flex(flex-start)

  &_data
    width 100%
    height 196px
    background-size 100%
    background-image url('/static/imgs/card.png')
    padding 44px 40px
    color #fff

    .label
      font-size 12px
      margin-bottom 4px

      &.label2
        margin-top 16px

    .data
      font-size 16px
</style>
