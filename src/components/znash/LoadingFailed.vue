<template lang="pug">
  .loadingFailed
    img.loadingFailed_icon(src='/static/imgs/error.png')
    .loadingFailed_text 加载失败，请重试
    van-button.loadingFailed_btn(@click="$emit('reload')" size='small' text='重新加载' plain round)
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 25
    }
  },
  computed: {
    styles () {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    },
    aroundSize () {
      return {
        transformOrigin: `0 ${this.size}px`
      }
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.loadingFailed
  width 100%
  // height 100%
  // position absolute
  height calc(100vh - 144px)
  top 0
  bottom 0
  left 0
  right 0
  Flex()
  flex-direction column

  &_icon
    width 95px

  &_text
    font-size 12px
    color $text_color_gray
    margin 10px 0 20px

  &_btn
    color $text_color_gray
    width 100px
    height 30px

</style>
