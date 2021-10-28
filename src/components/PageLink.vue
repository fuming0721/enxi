<template lang="pug">
  a.linkScroll(@click='scrollTo()')
    slot
</template>

<script>
let isScrolling = false

export default {
  props: {
    target: {
      type: String,
      default: '#'
    }
  },

  methods: {
    scrollTo () {
      if (isScrolling) {
        return
      }

      isScrolling = true
      const cb = () => { isScrolling = false }

      if (this.target === '#') {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        cb()
      } else {
        document.querySelector(this.target).scrollIntoView({ behavior: 'smooth' })
        cb()
      }
    }
  }
}
</script>
<style lang="stylus" type='text/stylus' scoped>
</style>
