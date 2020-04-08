<template>
  <el-container>
    <el-header height="60px" style="z-index:999999">
      <el-row type="flex">
        <el-col :span="10" class="header-title">爱折腾的Albert</el-col>
        <el-col :span="8">
          <el-row type="flex">
            <el-col :span="8">
              <el-input
                placeholder="请输入内容"
                suffix-icon="el-icon-search"
                v-model="search"
                class="click-btn"
              ></el-input>
            </el-col>
            <el-col :span="4"></el-col>

            <el-col :span="4">
              <div @click="getArticle" class="click-btn" :class="{ colorBlack: showArticle }">文章</div>
            </el-col>
             <el-col :span="4">
              <div class="click-btn" :class="{ colorBlack: showMarkDown }" >
                <router-link target="_blank" to="/write" class="router-link-active" style="color: #409eff;">写作</router-link>
              </div>
            </el-col>
            <el-col :span="4">
              <div @click="getManage" class="click-btn" :class="{ colorBlack: showManage }">管理</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <div class="click-btn" @click="drawer = true">登录</div>
        </el-col>
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

    <el-drawer
      title="登录"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
    <login></login>
    </el-drawer>
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
    closeDrawer(){
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

.header-title {
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

.header-line {
  height: 1px;
  background-color: #e9eef3;
}

.colorBlack {
  color: black;
}
</style>


