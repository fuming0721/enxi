<template lang="pug">
  .withdraw
    .withdraw_nav
      van-nav-bar(title="提现记录" left-arrow :border='false' fixed safe-area-inset-top @click-left='back')

    .withdraw_list
      van-pull-refresh(v-model="refreshing" @refresh="onRefresh")
        van-list(v-model="loading" :finished="finished" :finished-text="list.length ? '没有更多了' : ''" @load="onLoad")
          .list(v-if='list.length')
            template(v-for="item in list")
              WithdrawItem(:key="item" :item='item')

          Empty(:listLength='list.length' :finished='finished')

</template>

<script>
import { mapGetters } from 'vuex'
import { getHandlingChargeList } from '@/api'
export default {
  computed: {
    ...mapGetters(['theme'])
  },

  components: {
    WithdrawItem: () => import('@/components/WithdrawItem')
  },

  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1
    }
  },

  methods: {
    back () {
      this.$router.back()
    },
    async onLoad () {
      const params = {
        page: String(this.page)
      }
      try {
        const { page } = await getHandlingChargeList(params)
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
<style lang="stylus" type="text/stylus" scoped>
.withdraw
  min-height 100vh

  &_nav
    height 46px

  &_list
    padding 10px

  .empty
    height calc(100vh - 46px)
    padding-top 15vh

</style>
