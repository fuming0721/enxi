<template lang="pug">
  .scrollTop
    transition(name="btn-fade")
      .scrollTop_btn(v-show="showTop" @click="toTop2")
        van-icon(name="back-top" size='20')
</template>

<script>
const TOPHEIGHT = 1600
export default {
  data () {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0
    }
  },
  computed: {
    showTop () {
      return this.scrollTop > TOPHEIGHT
    }
  },
  mounted () {
    window.document.addEventListener('scroll', this.getScrollTop)
  },
  methods: {
    toTop2 () {
      if (this.scrollTop > 0) {
        window.requestAnimationFrame(this.toTop2)
        window.scrollTo(0, this.scrollTop - this.scrollTop / 4)
      }
    },
    toTop (e) {
      // eslint-disable-next-line
      if (!!this.scrollState) return
      this.scrollState = 1
      e.preventDefault()
      this.time = setInterval(() => { this.gotoTop(this.scrollTop - this.dParams) })
    },
    gotoTop (distance) {
      this.dParams += 100
      distance = distance > 0 ? distance : 0
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance
      if (this.scrollTop < 10) {
        clearInterval(this.time)
        this.dParams = 20
        this.scrollState = 0
      }
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // this.scrollTop = document.getElementById('main').scrollTop
    }
  }
}
</script>
<style lang="stylus" type='text/stylus' scoped>
  .scrollTop
    position fixed
    right 20px
    bottom 70px
    width 40px
    height 40px
    z-index 199
    isIphoneX()

    &_btn
      height 40px
      Flex()
      background-color rgba(255, 255, 255, 0.5)
      border-radius 4px
      box-shadow 0 4px 8px 0 rgba(204, 184, 184, 0.5)

  .backTop
    font-size 14px

  .btn-fade-enter-active
    transition all .8s ease

  .btn-fade-leave-active
    transition all .8s ease

  .btn-fade-enter,
  .btn-fade-leave-to
    transform translateY(80px)
    opacity 0

</style>
