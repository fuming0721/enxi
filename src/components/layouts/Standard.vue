<template lang="pug">
.body
  main.main(v-if="$auth.isReady" :style="minHeight")
    keep-alive
      router-view
    //- router-view(v-if='!$route.meta.rank')

  Loading(v-else)
  TabBar(v-if='!hideTabbar')
  BackTop(v-if='!hideBackTop')
</template>

<script>
const TABBAR_HEIGHT = 49
export default {
  components: {
    TabBar: () => import('../TabBar/TabBar'),
    BackTop: () => import('@/components/BackTop')
  },
  computed: {
    hideTabbar () {
      return this.$route.meta.hideTabbar || false
    },
    hideBackTop () {
      return this.$route.meta.hideBackTop || false
    },
    minHeight () {
      return {
        minHeight: `calc(100vh - ${this.hideTabbar ? 0 : TABBAR_HEIGHT}px)`
      }
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.body
  max-width 750px
  margin 0 auto

</style>
