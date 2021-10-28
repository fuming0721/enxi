<template lang="pug">
van-image.img(:fit='fit' :width='width' :height='height' lazy-load v-bind='$attrs')
  template(v-slot:loading)
    van-loading(type="spinner" size="20")
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    fit: {
      type: String,
      default: 'cover'
    }
  },
  inheritAttrs: false
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.img
  display block !important
  flex-shrink 0
  height 100%
  width 100%

  &_loading,
  &_error
    Flex()
    width 100%
    height 100%
    background-color #f5f5f5
    color #999
    font-size 20px
</style>
