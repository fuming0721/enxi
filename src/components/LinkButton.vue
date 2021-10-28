<template lang="pug">
  .eButton(:class='theme' @click='onTap') {{item.name}}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },
  methods: {
    onTap () {
      this.$emit('click', this.item)
    }
  }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.eButton
  width 80px
  height 30px
  Flex()
  border 1px solid
  color #999
  margin-right 10px
  border-radius 5px
</style>
