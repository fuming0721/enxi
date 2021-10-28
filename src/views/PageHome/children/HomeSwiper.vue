<template lang='pug'>
  .swiper
    Loading(v-if='loading')
    van-swipe(:autoplay="3000" indicator-color="white" height='139' v-else)
      van-swipe-item(v-for='item in list' :key='item.id')
        .item
          Img(:src='item.picUrl')
</template>

<script>
import { getHomeBanner } from '@/api'
export default {
  data () {
    return {
      list: [],
      loading: true
    }
  },
  created () {
    this.getList()
  },

  methods: {
    async getList () {
      const { page } = await getHomeBanner()
      this.list = page.list
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  height 139px
  width 100%
  position relative
  background-color #fff
.item
  width 100%
  height 100%
  background-color orange
</style>
