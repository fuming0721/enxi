<template lang='pug'>
.calculate
  .calculate_nav
    van-nav-bar(title="我的算力" left-arrow :border='false' fixed safe-area-inset-top @click-left='$router.back()')

  Loading(v-if='loading')

  van-pull-refresh(v-model="refreshing" @refresh="onLoad" v-else)

    Nav.nav(:tabs='navList' :active='active' @change='tabChange')

    .calculate_bar
      LinkButton(v-for='item in tabs' :key='item.value' :class="{active: activeTab==item.value}" :item='item' @click='channelChange')

    .calculate_data
      .label 0
      .data FIL 总算力（T）

    .calculate_list
      template(v-for='item in 10')
        CalculateItem(:item='item' :activeTab='activeTab')
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      refreshing: false,
      navList: [
        { is: 'FIL', name: 'Fil' },
        { is: 'BZZ', name: 'BZZ' }
      ],
      active: 'FIL',

      tabs: [
        { name: '在线算力', value: 0 },
        { name: '离线算力', value: 1 }
      ],
      activeTab: 0,

      list: []
    }
  },
  components: {
    Nav: () => import('@/components/Nav'),
    CalculateItem: () => import('./children/CalculateItem')
  },

  created () {
    this.onLoad()
  },

  methods: {
    tabChange (item) {
      this.active = item.is
      // document.getElementById('id').scrollTo(0, 0)
    },

    channelChange (item) {
      this.activeTab = item.value
    },

    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.info = {
            money: '22200.00'
          }
          this.refreshing = false
        }

        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.calculate
  min-height 100%

  &_nav
    height 46px

  .nav
    border-top 1px solid #bbb
    &>>>.sNav_view
      position static

  &_bar
    Flex(flex-start)
    padding 20px 10px 10px

  &_data
    width 100%
    height 105px
    background-size cover
    background-image url('/static/imgs/card1.png')
    color #fff
    Flex()
    flex-direction column

    .label
      font-size 15px
      font-weight bold

    .data
      font-size 12px
      margin-top 5px

  &_list
    padding 0 10px
</style>
