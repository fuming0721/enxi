<template lang="pug">
.withdrawItem.pannelView
  .withdrawItem_top(v-if='item % 2')
    van-icon(name="checked" color='#57C22D' size='22')
    .withdrawItem_info
      span.name 币安提现
      span 2021-09-09 21:00

    .count +0.0000001
      span 个

  .withdrawItem_top(v-else)
    van-icon(name="clear" color='#FD4242' size='22')
    .withdrawItem_info
      span.name 币安提现
      span 2021-09-09 21:00

    .error 编号不正确，请重新提交

  .withdrawItem_bottom 0x5bf6e6c3245ddf2592d40babcc41b751341462baf5e8533f81f0dbdcad8be44c

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['item'],
  data () {
    return {
      formData: {
        address: ''
      }
    }
  },

  computed: {
    ...mapGetters(['theme'])
  },

  methods: {
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.withdrawItem
  margin-bottom 10px

  &_top
    padding 10px
    Flex(space-between)

  &_bottom
    padding 5px 10px
    word-wrap break-word
    font-size 12px
    line-height 1.5
    border-top 1px solid

  &_info
    margin 0 auto 0 10px
    font-size 12px
    Flex(space-between, flex-start)
    flex-direction column
    color #999

    .name
      font-size 15px
      font-weight bold
      margin-bottom 5px

  .count
    font-size 15px
    Flex()
    justify-content flex-end

    span
      font-size 13px
      color #999

  .error
    font-size 12px

  &_bottom
    color #999

</style>
