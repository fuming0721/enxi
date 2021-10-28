<template lang="pug">
  .tag(@click.stop='toTopic')
    img.tag_icon(src='/static/imgs/tag.png')
    .tag_name {{item.title}}
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
    toTopic () {
      this.$router.push({ name: 'topicDetail', params: { id: this.item.id } })
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.tag
  flex-shrink 0
  border 1px solid #f2f2f2
  border-radius 24px
  height 24px
  Flex()
  padding 0 12px
  margin 0 10px 5px 0
  transition all .3s

  &:active
    background-color #f2f2f2

  &_icon
    width 12px
    margin-right 5px

  &_name
    font-size 12px
</style>
