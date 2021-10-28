<template lang="pug">
van-image.img(fit='cover' :width='size' :height='size' v-bind='$attrs')
  template(v-slot:loading)
    van-icon(name="contact" :size="size/2")
  template(v-slot:error)
    van-icon(name="contact" :size="size/2")
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '100%'
    }
  },
  inheritAttrs: false
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.img
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
