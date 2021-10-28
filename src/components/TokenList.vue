<template lang="pug">
.token
  .token_item(v-for='item in currencyList' @click='onTap(item)')
    Icon(:name="`/static/imgs/tokenIcon/${item.name}.png`" :size='24')
    .name {{item.name}}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters(['currencyList'])
  },

  mounted () {
    console.log(this.currencyList)
  },

  methods: {
    onTap (item) {
      this.$emit('change', item)
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.token
  padding-bottom 10px
  &_item
    Flex()
    height 50px
    border-top 1px solid #e5e5e5

    .name
      font-size 14px
      color rgba(0, 0, 0, .5)
      margin-left 10px
      display inline-block
      width 50px

    &:active
      background-color #f2f2f2

      .name
        color #000
</style>
