<template>
  <el-container>
    <el-header style="z-index:999999">
      <el-row type="flex" :gutter="20">
        <el-col :span="8" class="header-title">
          <div @click="goHome()">爱折腾的Albert</div>
        </el-col>
        <el-col :span="6" class="">
          <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="search"
            class="click-btn"
            @select="handleSelect"
          ></el-input>
        </el-col>
        <el-col :span="10" :offset="4" class="nav">
          <el-menu  router class="el-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" route="/">首页</el-menu-item>
            <el-menu-item index="2">分类</el-menu-item>
            <el-menu-item index="3">标签</el-menu-item>
            <el-menu-item index="4">归档</el-menu-item>
            <el-menu-item index="5" route="/mine">关于我</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="2">
          <div class="click-btn login-btn " @click="goLogin">登录</div>
        </el-col>
      </el-row>
      <el-row>
        <div class="header-line"></div>
      </el-row>
    </el-header>
    <el-container style="margin:100px 25% 0 25%;padding: 0">
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Layout",
    data() {
      return {
        search: "",
      };
    },
    methods: {
      getArticleCategory() {
        this.$axios
          .get("/article/category/list")
          .then(res => {
            console.log(res);
            this.categories = res.data.data;
          })
          .catch(() => {
          });
      },
      handleSelect() {

      },
      goHome() {
        this.$router.push({path: '/'})
      },
      goLogin() {
        this.$router.push({path: '/login'})
      },
    },
    created() {
      this.getArticleCategory();
    }
  };
</script>

<style scoped>


  .el-header {
    height: 60px;
    line-height: 60px;
    color: #409eff;
    background-color: #ffffff;
    font-weight: 400;
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .el-menu {
    width: 100%;
    height: 100%;
    line-height: 80px;

  }

  .header-title {
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }

  .el-menu-item {
    font-size: 16px;
    font-weight: bold;
  }

  .login-btn {
    margin-left: 10px;
  }

  .header-line {
    height: 1px;
    background-color: #e9eef3;
  }

  .colorBlack {
    color: #0010ff;
  }
</style>


