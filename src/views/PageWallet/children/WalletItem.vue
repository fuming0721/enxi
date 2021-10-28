<template lang="pug">
.walletItem.pannelView(@click='toToken')
  .walletItem_top
    Icon(:name="`/static/imgs/tokenIcon/${item.icon}.png`" :size='32')
    .walletItem_info
      .walletItem_name {{item.name}}
      .walletItem_count 1≈$12.00
    van-icon(name="arrow" size='20' color='#bbb')

  .walletItem_bottom
    .walletItem_bottom_item
      span 可用
      .count 3232132131

    .walletItem_bottom_item
      span 冻结
      .count 200
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      formData: {
        address: ''
      }
    }
  },

  methods: {
    toToken () {
      this.$router.push(`/wallet_token/${this.item.name}`)
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.walletItem
  margin-bottom 10px
  padding 10px

  &_top
    Flex(space-between)

  &_info
    Flex(space-between, flex-start)
    flex-direction column
    margin 0 auto 0 10px

  &_name
    font-size 14px
    font-weight 500

  &_count
    font-size 12px

  &_bottom
    padding 20px 10px 10px
    Flex()

    &_item
      width 50%
      Flex()
      flex-direction column
      color #999
      font-size 13px

      .count
        font-size 15px
        margin-top 5px

</style>
