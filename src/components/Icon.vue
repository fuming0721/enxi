<template lang="pug">
  van-icon.iconfont(class-prefix="icon" :size='size' v-bind='$attrs')
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 14
    }
  },
  inheritAttrs: false
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.iconfont
  flex-shrink 0
  position relative
</style>
