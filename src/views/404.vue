<template>
  <div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
  export default {
    name: "404",
    data() {
      return {
        loginForm: {
          user: "",
          password: ""
        },
        rules: {
          user: [{required: true, message: "请输入用户名称", trigger: "blur"}],
          password: [
            // { required: true, message: "请输入密码", trigger: "blur" },
            // { min: 8, max: 18, message: "长度在 8 到 18 个字符", trigger: "blur" }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if (
              this.loginForm.user === "hzx" &&
              this.loginForm.password === "albert"
            ) {
              localStorage.setItem("token", "hzx");
              this.$parent.closeDrawer();
              this.$notify.success("登录成功");
            }
            // this.$axios
            //   .post("/user/login", this.loginUser)
            //   .then(res => {})
            //   .catch(() => {
            //       alert("请求失败");
            //   });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>

  div {
    /*background-color: #409eff;*/
    height: 100%;

  }
  .title-container {
    position: relative;
    text-align: center;
    margin-bottom:50px;
    font-size: 24px;
    font-family: 'Google Sans','Noto Sans Myanmar UI',arial,sans-serif;
  }
  .login-form {
    position: relative;
    width: 300px;
    max-width: 100%;
    padding: 50px 35px 0;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border-radius: 30px;
  }

</style>

