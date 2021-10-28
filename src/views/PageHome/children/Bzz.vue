<template lang='pug'>
  .view
    .view_head
      .view_head_line
      .view_head_title BZZ全网算力

      .view_head_link
        span FIL Pool浏览器
        Icon(name='/static/imgs/link_arrow.png' :size='20')

    .view_content
      .view_content_item.border_color
        .label 全网节点数
        .num 917221

      .view_content_item.border_color
        .label 24小时新增节点
        .num 3232

      .view_content_item.border_color
        .label 24小时出票
        .num 0

      .view_content_item.border_color
        .label 全网出票节点
        .num 3232

      .view_content_item.border_color
        .label 24小时出票节点
        .num 0

      .view_content_item.border_color
        .label 24小时BZZ兑换
        .num 0
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.view
  // height 130px
  width 100%

  &_head
    Flex(space-between)
    padding 12px 10px 10px

    &_line
      width 2px
      height 14px
      border-radius 2px

    &_title
      margin 0 auto 0 5px

    &_link
      color #aaa
      Flex()
      font-size 12px

  &_content
    display flex
    flex-wrap wrap

    &_item
      width 33.3%
      height 55px
      Flex()
      flex-direction column
      border-bottom 1px solid
      border-right 1px solid

      &:nth-child(3n+0)
        border-right none
      &:nth-child(n+4)
        border-bottom none

      .label
        font-size 12px
      .num
        margin-top 5px
        font-size 13px

</style>
