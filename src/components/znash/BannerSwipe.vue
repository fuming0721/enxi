<template lang="pug">
van-swipe.banner_swipe(:autoplay="3000")
  van-swipe-item(v-for="(item, index) in list" :key="index")
    .banner_swipe_item(@click='jumpLink(item)')
      Img.banner_swipe_item_img(:src='item.picture_url')
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    jumpLink (item) {
      if (item.parameters && item.parameters.model) {
        console.log(item.parameters)
      } else {
        window.location.href = item.link
      }
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.banner_swipe
  overflow hidden

  &_item
    padding 15px 15px 20px
    height 180px

    &_img
      border-radius 10px
      overflow hidden

  &>>>.van-swipe__indicators
    bottom 4px !important

  &>>>.van-swipe__indicator
    background-color #999 !important

  &>>>.van-swipe__indicator--active
    background-color #333 !important
</style>
