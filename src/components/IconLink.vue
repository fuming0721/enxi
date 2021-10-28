<template lang="pug">
.iconLink(@click='jump')
  Icon(:name="`/static/imgs/${item.icon}.png`" :size='28')
  .iconLink_text {{item.name}}
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    jump () {
      if (this.item.link) {
        this.$router.push(this.item.link)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.iconLink
  flex-shrink 0
  Flex()
  flex-direction column

  &_text
    margin-top 5px
    font-size 12px
</style>
