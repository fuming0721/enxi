<template lang="pug">
  .loading
    .loading_circle(:style='styles')
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 40
    }
  },
  computed: {
    styles () {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.loading
  top 0
  left 0
  bottom 0
  right 0
  position absolute
  Flex()

  &_circle
    animation rotate-forever 0.5s infinite linear
    border 3px solid
    border-right-color transparent
    border-radius 50%

@keyframes rotate-forever
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)
</style>
