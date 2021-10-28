<template lang="pug">
transition(name="van-fade")
  .downloadApp
    van-button.downloadApp_btn(v-if='showSelf' @click='download' color='#ffd012' round size='small') 点击打开App
</template>

<script>
export default {
  data () {
    return {
      showSelf: true
    }
  },
  methods: {
    download () {
      this.$store.commit('common/OPENAPP')
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.downloadApp
  height 30px
  position fixed
  bottom 70px
  left calc(50% - 60px)
  width 120px
  Flex()
  isIphoneX()
  &_btn
    font-size 12px
    height 30px
    width 100%
    box-shadow 2px 2px 6px 0 rgba(0, 0, 0, .4)

    &>>>.van-button__text
      color #333
</style>
