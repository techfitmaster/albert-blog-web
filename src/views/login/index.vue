<template>
  <div>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="login-form">
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>

      <el-form-item prop="user">
        <el-input type="user" v-model="loginForm.user" autocomplete="off" placeholder="请输入用户"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click="submitForm('loginForm')"
      >登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        user: "admin",
        password: "123456"
      },
      rules: {
        user: [{ required: true, message: "请输入用户名称", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 18, message: "长度在 8 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/user/login", this.loginUser)
            .then(res => {})
            .catch(() => {
                alert("请求失败");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.title-container {
  position: relative;
}
.login-form {
  position: relative;
  width: 500px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
</style>


