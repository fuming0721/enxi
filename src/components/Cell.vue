<template lang="pug">
.sCell
  .left
    .title(v-if='title') {{title}}
    slot(v-else)
  .right
    .content(:class="{notLink: !isLink}") {{content}}
    van-icon.icon(name="arrow" size='18' color='#999' v-if='isLink')
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['title', 'content', 'isLink'],

  computed: {
    ...mapGetters(['theme'])
  },

  methods: {
    tabChange (item) {
      this.$emit('change', item)
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.sCell
  min-height 44px
  Flex(space-between)
  padding 7px 10px 7px 15px

  &:not(:last-child)
    border-bottom 1px solid

  .title
    font-weight bold
    font-size 14px

  .content
    font-size 14px
    color #999

  .icon
    margin-left 5px

  .right
    Flex(flex-end)

</style>
