<template lang="pug">
  .notfound
    img.notfound_icon(src='/static/imgs/404.png')
    .notfound_text 你来到了一个陌生的地方
    van-button.notfound_btn(to='/' size='small' text='回到主页' plain round)
</template>

<script>
export default {

}
</script>
<style lang="stylus" type="text/stylus" scoped>
.notfound
  width 100%
  height 100vh
  Flex()
  flex-direction column
  padding-bottom 150px

  &_icon
    width 200px

  &_text
    font-size 12px
    color $text_color_gray
    margin 20px 0

  &_btn
    color $text_color_gray
    width 100px

</style>
