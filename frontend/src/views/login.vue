<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用户登录</span>
    </div>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      label-position="right"
    >
      <el-form-item label="账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import {userLogin} from '@/api/user'
export default {
  name: "userLogin",
  data() {
    return {
      form: {
        username: "123",
        password: "123",
      },
      rules: {
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
            userLogin(this.form).then(resp=>{
                console.log(resp)
            })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>