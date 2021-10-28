<template lang='pug'>
  .reset
    .reset_nav
      van-nav-bar(title="忘记密码" fixed left-arrow safe-area-inset-top @click-left='$router.back()')

    van-form.resetForm(@submit="onSubmit" error-message-align='right')

      .resetForm_item
        Icon(name='mobile' :size='18' color='#bbb')
        van-field.resetForm_item_field(v-model="formData.mobile" placeholder='请输入手机号' type='tel' clearable)

      .resetForm_item
        Icon(name='code' :size='18' color='#bbb')
        van-field.resetForm_item_field(v-model="formData.code" placeholder='请输入验证码' clearable)
          template(#button)
            van-button.codeBtn(plain :color="theme=='white' ? '#2944C7' : '#F9CE31'") 获取验证码

      .resetForm_item
        Icon(name='mima' :size='18' color='#bbb')
        van-field.resetForm_item_field(v-model="formData.password" placeholder='请输入新密码' type='password' clearable)

      .resetForm_item
        Icon(name='mima' :size='18' color='#bbb')
        van-field.resetForm_item_field(v-model="formData.password" placeholder='请确认新密码' type='password' clearable)

      van-button.resetForm_submit(block native-type="submit" type='res') 确定
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      formData: {
        mobile: '',
        code: '',
        password: ''
      },
      sending: false,
      remmber: false
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },
  methods: {
    async onSubmit () {
      if (!this.mobileIsOk || this.formData.code.length < 4) {
        this.$toast('发送失败，请检查填写是否正确')
        return
      }
      try {
        this.loading = true
        await this.$auth.login('login', this.formData)
        this.$toast('登录成功')
        this.$router.replace(this.$route.query.redirect || '/')
      } catch (err) {
        console.log(err)
        this.$toast(err.data.message)
        this.loading = false
      }
    },
    toRegist () {
      console.log(22)
    },

    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.reset
  height 100vh

  &_nav
    height 46px

  &Form
    padding 15vh 38px

    &_item
      Flex(flex-start)
      border-bottom 1px solid
      margin-bottom 20px

      &_field
        background-color transparent !important

    &_submit
      margin-top 60px

.codeBtn
  height 30px
  margin-right -15px
  background-color transparent !important
</style>
