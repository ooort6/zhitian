<template>
  <div class="hezuoform">
      <div style="background:#fff;width:50%;margin:0 auto;padding:20px;">

     
      <span style="text-align:center;display:block;color:#172A88;font-size:36px;margin-bottom:5%">贵公司基本信息</span>
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      label-position="right"
      :label-width="80"
    >
      <FormItem label="公司名称" prop="name">
        <Input v-model="formValidate.name"></Input>
      </FormItem>
      <FormItem label="注册资金" prop="money">
        <Input v-model="formValidate.money"></Input>
      </FormItem>
      <FormItem label="成立时间" prop="ctime">
        <Input  v-model="formValidate.ctime"></Input>
      </FormItem>
      <FormItem label="意向合作行业" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="male">Male</Radio>
          <Radio label="female">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="联系人" prop="contacts">
        <Input v-model="formValidate.contacts"></Input>
      </FormItem>
      <FormItem label="职务" prop="post">
        <Input v-model="formValidate.post"></Input>
      </FormItem>
      <FormItem label="手机" prop="phone">
        <Input v-model="formValidate.phone"></Input>
      </FormItem>
      <FormItem label="联系电话" prop="number">
        <Input v-model="formValidate.number"></Input>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Input v-model="formValidate.mail"></Input>
      </FormItem>
      <FormItem label="公司网址" prop="gurl">
        <Input v-model="formValidate.gurl"></Input>
      </FormItem>
      <!-- <FormItem label="Hobby" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
      </FormItem>-->
      <FormItem label="公司业务简介" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
   </div>
</template>
<script>
export default {
  name: "hezuoform",
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else if (!/^1[34578]\d{9}$/.test(value)) {
        callback("请填写正确的手机号");
      } else {
        callback();
      }
    };
    return {
        // aa:false,

      formValidate: {
        name: "",
        mail: "",
        gender: "",
        // interest: [],
        // time: '',
        desc: "",
        money: "",
        ctime: "",
        contacts: "",
        post: "",
        phone: "",
        number: "",
        gurl: "",
      },
      ruleValidate: {
        name: [
          { required: true, message: "公司名称不能为空", trigger: "blur" }
        ],
        money: [
          { required: true, message: "注册资金不能为空", trigger: "blur" }
        ],
        ctime: [
          { required: true, message: "成立时间不能为空", trigger: "blur" }
        ],
        contacts: [
          { required: true, message: "联系人不能为空", trigger: "blur" }
        ],
        post: [{ required: true, message: "职务不能为空", trigger: "blur" }],
        phone: [
        //   { required: true, message: "手机号码不能为空", trigger: "blur" },
          {validator:validatePhone,trigger:'blur'}
        ],
        number: [
          { required: true, message: "联系电话不能为空", trigger: "blur" }
        ],
        gurl: [
          { required: true, message: "公司网址不能为空", trigger: "blur" }
          // { type: 'url', message: '请填写正确的网址', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "请填写正确的邮箱", trigger: "blur" }
        ],

        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        // interest: [
        //     { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
        //     { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        // ],

        // time: [
        //     { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        // ],
        desc: [
          { required: true, message: "公司业务简介不能为空", trigger: "blur" }
          // { type: 'string', min: 10, message: '最少不少于10个字', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.hezuoform {
  padding-top: 5%;
  height: 100%;
  width: 100%;
  background: #f6f6f6;
  margin: 0 auto;
}
</style>


