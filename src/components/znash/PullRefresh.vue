<template lang="pug">
  van-pull-refresh#refresh(v-model="isLoading" @refresh="onRefresh" :disabled='disabled || scrollTop > 0')
    slot
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isLoading: false,
      scrollTop: 0
    }
  },
  created () {
    window.document.addEventListener('scroll', this.getScrollTop)
  },
  methods: {
    onRefresh () {
      this.$emit('refresh', () => {
        this.isLoading = false
      })
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  beforeDestroy () {
    window.document.removeEventListener('scroll', this.getScrollTop)
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.loading

  &_start,
  &_loosing,
  &_loading
  &_success
    height 100%
    flex-grow 1
    Flex()

  &_img
    width 40px

  &_planet
    width 10px
    height 10px

  &_gif
    position relative
    width 40px
    height 40px

  &_planet
    position absolute
    top -50%
    left 50%
    animation around .4s infinite linear
    transform-origin 0 40px

  @keyframes around
    to
      transform rotate(1turn)

#refresh
  overflow visible

</style>
