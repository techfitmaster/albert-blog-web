<template>
  <el-container>
    <el-header height="60px" style="z-index:999999">
      <el-row type="flex" :gutter="20">
        <el-col :span="6" class="header-title" ><div @click="getArticle">爱折腾的Albert</div></el-col>
        <el-col :span="6" class="">
          <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="search"
            class="click-btn"
          ></el-input>
        </el-col>
        <el-col :span="10" :offset="2" class="nav">
          <el-menu  :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">分类</el-menu-item>
            <el-menu-item index="3">标签</el-menu-item>
            <el-menu-item index="4">归档</el-menu-item>
            <el-menu-item index="5">关于我</el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="2">
          <div class="click-btn login-btn " @click="drawer = true">登录</div>
        </el-col>

        <!--            <el-col :span="4">-->
        <!--              <div @click="getArticle" class="click-btn" :class="{ colorBlack: showArticle }">文章</div>-->
        <!--            </el-col>-->
        <!--             <el-col :span="4">-->
        <!--              <div class="click-btn" :class="{ colorBlack: showMarkDown }" >-->
        <!--                <router-link target="_blank" to="/write" class="router-link-active" style="color: #409eff;">写作</router-link>-->
        <!--              </div>-->
        <!--            </el-col>-->
        <!--            <el-col :span="4">-->
        <!--              <div @click="getManage" class="click-btn" :class="{ colorBlack: showManage }">管理</div>-->
        <!--            </el-col>-->
      </el-row>

      <el-row>
        <div class="header-line"></div>
      </el-row>
    </el-header>
    <el-container style="margin-top:60px">
      <el-aside width="10%"></el-aside>
      <blog-article :isVisible="showArticle" :num="num"></blog-article>
      <manage :isVisible="showManage"></manage>
      <el-aside width="10%"></el-aside>
    </el-container>

    <!--    <el-drawer-->
    <!--      title="登录"-->
    <!--      :visible.sync="drawer"-->
    <!--      :direction="direction"-->
    <!--      :before-close="handleClose"-->
    <!--    >-->
    <!--    <login></login>-->
    <!--    </el-drawer>-->
  </el-container>
</template>

<script>
  import BlogArticle from "./Article";
  import Manage from "./Manage";
  import Markdown from "./Markdown";
  import Login from "../login/index";

  export default {
    name: "Layout",
    data() {
      return {
        activeIndex: '1',
        activeName: 'second',
        drawer: false,
        direction: "rtl",
        isColorBlack: false,
        showArticle: true,
        showManage: false,
        showMarkDown: false,
        showArticleDetail: false,
        search: "",
        num: 0
      };
    },
    components: {
      Markdown,
      Manage,
      BlogArticle,
      Login
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)

        switch (key) {
          case '1':
            console.log("do 1")
            this.getArticle()
            break;
          case '3':
            console.log("do 3")
            this.writeMarkDown();
        }
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      closeDrawer() {
        this.drawer = false;
      },
      handleClose(done) {
        done();
      },
      getArticle() {
        (this.showArticle = true), (this.showManage = false);
        this.showMarkDown = false;
        this.num++;
      },
      getManage() {
        (this.showArticle = false), (this.showManage = true);
        this.showMarkDown = false;
      },
      writeMarkDown() {
        this.showMarkDown = true;
        this.showArticle = false;
        this.showManage = false;
      }
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

  }

  .header-title {
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }
  .el-menu-item{
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


