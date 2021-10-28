<template lang='pug'>
  .fullPage.login
    van-icon.login_back(name='arrow-left' :color="theme=='white' ? '#999' : '#bbb'" size='30' @click='$router.back()')

    .login_title
      Icon(name='/static/imgs/logo.png' :size='40')
      .text 恩汐超算

    van-form.loginForm(@submit="onSubmit" error-message-align='right')

      .loginForm_item
        Icon(name='yonghu' :size='18' color='#bbb')
        van-field.loginForm_item_field(v-model="formData.account" placeholder='请输入手机号或邮箱' type='tel' clearable)

      .loginForm_item
        Icon(name='mima' :size='18' color='#bbb')
        van-field.loginForm_item_field(v-model="formData.password" placeholder='请输入密码' type='password' clearable)

      .loginForm_action
        .remmeber
        //- van-checkbox.resCheckBox(v-model="remmber" shape="square" icon-size="16px" :checked-color="theme=='white' ? '#29529F' : '#F9CE31'" :class="{isSelect: remmber}") 记住密码

        .forget(@click="$router.push('/reset')") 忘记密码？

      van-button.loginForm_submit(block native-type="submit" type='res' :disabled='!formData.account || !formData.password' loading-text="登录中..." :loading='sending') 登录
    van-button.loginForm_reg(block color="#2EBD89" @click='toRegist') 注册
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      formData: {
        account: '10086',
        password: '123456'
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
      try {
        this.sending = true
        await this.$auth.login(this.formData)
        this.$toast('登录成功')
        this.$router.replace(this.$route.query.redirect || '/')
      } catch {
        this.sending = false
      }
    },

    toRegist () {
      this.$router.push('/regist')
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  Flex()
  flex-direction column
  padding 38px
  // padding-bottom 120px

  &_back
    position absolute
    top 20px
    left 20px

  &_title
    Flex()
    margin-bottom 50px

    .text
      font-size 28px
      font-weight bold
      margin-left 5px
      background linear-gradient(0deg, #216AA5 0%, #20B7C0 91.69921875%)
      -webkit-background-clip text
      -webkit-text-fill-color transparent
.loginForm
  width 100%

  &_reg
    margin-top 15px
    border-radius 4px

  &_item
    Flex(flex-start)
    border-bottom 1px solid
    margin-bottom 20px

    &_field
      background-color transparent !important

  &_code
    padding 0 15px

  &_submit
    margin-top 30px
    border none !important

  &_action
    Flex(space-between)
    .forget
      font-size 13px
      color #bbb

    &>>>.van-icon
      border-radius 4px
    &>>>.van-checkbox__label
      font-size 13px
      color #bbb

</style>
