<template lang='pug'>
  .registerForm
    van-form(@submit="onSubmit")
      van-field(label-align='top' readonly clickable name="picker" :value="formData.nationality" label="国籍" placeholder="点击选择国家" @click="showPicker = true")
        template(#right-icon)
          span {{code}}

      van-field.registerForm_item(v-model="formData.email" label="Email" placeholder='请输入Email' key='email' clearable label-align='top' :rules="[{ validator: validatorEmail, message: '请输入正确Email地址' }]")

      van-field.registerForm_item(v-model="formData.password" label="请输入6-16位登陆密码（区分大小写）" placeholder='请输入密码' type='password' clearable label-align='top' :rules="[{ validator: validatePass, message: '密码格式不正确' }]")

      van-field.registerForm_item(v-model="password" label="请再次输入密码" placeholder='请输入手机号码' type='password' clearable label-align='top' :rules="[{ validator: validatePassAgain, message: '密码不一致' }]")

      van-field.registerForm_item(v-model="formData.invitation_code" label="邀请码" placeholder='请输入邀请码' clearable label-align='top')

      .registerForm_agreement
        van-checkbox.resCheckBox(v-model="isAgree" shape="square" icon-size="16px" :checked-color="theme=='white' ? '#29529F' : '#F9CE31'" :class="{isSelect: isAgree}") 我同意
          span.resText 《注册协议》

      .registerForm_btn
        van-button(block type='res' native-type="submit" :loading='sending' :disabled='!isAgree') 注册

    van-popup(v-model="showPicker" position="bottom" round safe-area-inset-bottom)
      van-picker(show-toolbar :columns="columns" value-key='name' @confirm="onConfirm" @cancel="showPicker = false")
</template>

<script>
import { mapGetters } from 'vuex'
import { isEmail, validatePass } from '@/config/validation'
import { register } from '@/api'
import countrylist from './contruy'
export default {
  components: {
  },

  data () {
    return {
      formData: {
        nationality: '中国大陆',
        email: '',
        password: '',
        invitation_code: ''
      },
      code: '+86',
      password: '',
      sending: false,
      isAgree: false,
      showPicker: false,
      columns: countrylist
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },
  methods: {
    validatorEmail (val) {
      return isEmail(val)
    },

    validatePass (val) {
      return validatePass(val)
    },

    validatePassAgain (val) {
      return this.formData.password === val
    },

    onConfirm ({ name, tel }) {
      this.formData.nationality = name
      this.code = tel
      this.showPicker = false
    },

    async onSubmit () {
      try {
        this.sending = true
        await register(this.formData)
        this.$toast('注册成功')
        this.$router.back()
        this.sending = false
      } catch {
        this.sending = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.registerForm
  &_item
    // margin-bottom 10px

  .remmeber
    font-size 13px
    color #bbb

  &_agreement
    padding 10px 15px

    &>>>.van-icon
      border-radius 4px
    &>>>.van-checkbox__label
      font-size 13px
      color #bbb

  &_btn
    padding 30px 15px
</style>
