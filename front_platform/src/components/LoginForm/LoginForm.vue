<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="userPwd">
      <Input type="password" v-model="form.userPwd" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button  v-if="$route.name === 'login'"  :loading="submitLoading" @click.stop="handleSubmit" type="primary" long>登录</Button>
      <span v-if="$route.name === 'login'" class="registTip" @click="$router.push({name:'regist'})">还没账号？<span>去注册</span></span>
      <Button v-if="$route.name === 'regist'" @click.stop="regist" type="primary" long>注册</Button>
      <span v-if="$route.name === 'regist'" class="registTip" @click="$router.push({name:'login'})">已注册！<span>去登录</span></span>
    </FormItem>
  </Form>
</template>
<script>
import {login, regist} from '@/api/user'
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    userPwdRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      submitLoading:false,//防止重复提交
      form: {
        userName: 'admin',
        userPwd: 'admin'
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        userPwd: this.userPwdRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.submitLoading = true
          this.handleLogin(this.form)
          this.submitLoading = false
        }
      })
    },
    async handleLogin(params) {
      const res = await login(params)
      console.log(res)
      if (res.status == 0) {
        this.$Message.success('登录成功')
        localStorage.setItem('userId',res.result.userId)
        this.$router.push({name:'home'})
      } else{
        this.$Message.error(res.message)
      }
    },
    regist () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this._regist(this.form)
        }
      })
    },
    async _regist(params){
      const res = await regist(params)
      if (res.status === 0) {
        this.$Message.success('注册成功')
        this.$router.push({name:"login"})
      } else if(res.status== 1){
        this.$Message.error(res.msg)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.registTip{
  color:#2d8cf0;
  font-size:14px;
  margin: 20px 0
  span {
    text-decoration: underline;
  }
  &:hover{
    cursor: pointer;
    color: orange;
  }
}
</style>

