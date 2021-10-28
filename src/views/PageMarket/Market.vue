<template lang='pug'>
  .market
    Nav(:tabs='navList' :active='active' @change='tabChange')
      van-icon.market_help(name="question-o" size='20px')

    van-pull-refresh(v-model="refreshing" @refresh="onRefresh")
      van-list.market_main(v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad")
        template(v-for='item in list')
          MarketItem(:item='item')
</template>

<script>
import { getProductList } from '@/api'
export default {
  data () {
    return {
      navList: [
        { is: 0, name: 'IPFS' },
        { is: 1, name: 'Swarm' }
      ],
      loading: false,
      finished: false,
      refreshing: false,
      active: 0,
      list: [],
      page: 1
    }
  },
  components: {
    MarketItem: () => import('./children/MarketItem'),
    Nav: () => import('@/components/Nav')
  },

  methods: {
    tabChange (item) {
      // document.getElementById('id').scrollTo(0, 0)
      console.log(item)
      this.page = 1
      this.loading = true
      this.finished = false
      this.active = item.is
      this.onLoad()
    },

    async onLoad () {
      const params = {
        page: String(this.page),
        type: this.active
      }
      try {
        const { page } = await getProductList(params)
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
.market
  min-height 100%
  position relative

  &_help
    margin-left auto

  &_main
    padding 15px 15px 0
    min-height calc(100vh - 44px)

</style>
