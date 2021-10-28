<template lang="pug">
.sNav
  .sNav_view
    .sNav_item(v-for='item in tabs' :class="{active: active==item.is}" @click='tabChange(item)')
      span {{item.name}}
    slot
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },

    active: {
      type: Number || String,
      required: true
    }
  },

  methods: {
    tabChange (item) {
      this.$emit('change', item)
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.sNav
  height 44px

  &_view
    Flex(flex-start)
    font-size 14px
    position fixed
    width 100%
    height 44px
    top 0
    left 0
    right 0
    padding 0 15px
    z-index 9090

  &_item
    color #999
    margin-right 30px
    height 100%
    Flex()
    padding 0 5px

    span
      transition all .2s

    &.active
      border-bottom 2px solid
      span
        transform scale(1.3)
</style>
