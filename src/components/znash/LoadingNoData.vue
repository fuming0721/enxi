<template lang="pug">
  .loadingNodata
    img.loadingNodata_icon(src='/static/imgs/nodata.png')
    .loadingNodata_text {{text}}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '没有内容'
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.loadingNodata
  width 100%
  // height 100%
  // position absolute
  top 0
  height calc(100vh - 144px)
  left 0
  right 0
  left 0
  Flex()
  flex-direction column

  &_icon
    width 95px

  &_text
    font-size 12px
    color $text_color_gray
    margin 10px 0 20px
</style>
