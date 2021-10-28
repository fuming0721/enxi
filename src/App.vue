<template lang='pug'>
  #app(:data-theme="theme")
    router-view

    .switch22
      van-switch(v-model="checked" @change='themeChange' size='20')
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['theme'])
  },
  data () {
    return {
      checked: false
    }
  },
  created () {
    this.checked = this.theme === 'black'
    this.$store.dispatch('getCurrency')
  },

  methods: {
    themeChange (e) {
      this.$store.dispatch('setTheme', e ? 'black' : 'white')
    }
  }
}
</script>

<style lang="stylus" type='text/stylus'>
  @import 'assets/styles/reset'
  @import 'assets/styles/common'
  @import 'assets/styles/white.styl'
  @import 'assets/styles/black.styl'

  .switch22
    position fixed
    bottom 20vh
    z-index 909090909
</style>
