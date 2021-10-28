<template lang="pug">
.noticeItem.pannelView(@click='toDetail')
  .noticeItem_point
    .span

  .noticeItem_info
    .title {{item.title}}
    .date {{item.createTime}}

  .noticeItem_arrow
    van-icon(name="arrow" size='22' color='#bbb')

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['item'],
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters(['theme'])
  },

  methods: {
    toDetail () {
      this.$router.push(`/notice/${this.item.id}`)
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.noticeItem
  margin-bottom 10px
  Flex(space-between)
  padding 10px

  &_point
    width 9px
    flex-shrink 0
    Flex()
    margin-right 10px

    .span
      width 9px
      height 9px
      background-color #F23D20
      border-radius 9px

  &_info
    flex-grow 1

    .title
      font-size 14px
      margin-bottom 8px
      line-height 1.5

    .date
      font-size 12px
      color #bbb

  &_arrow
    width 30px
    Flex()
    flex-shrink 0

</style>
