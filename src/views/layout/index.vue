<template>
  <el-container>
    <el-header style="z-index:999999">
      <el-row type="flex" :gutter="20">
        <el-col :span="8" class="header-title">
          <div @click="getArticle">爱折腾的Albert</div>
        </el-col>
        <el-col :span="6" class="">
          <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="search"
            class="click-btn"
          ></el-input>
        </el-col>
        <el-col :span="10" :offset="4" class="nav">
          <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
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

      </el-row>

      <el-row>
        <div class="header-line"></div>
      </el-row>
    </el-header>
    <el-container style="margin:100px 25% 0 25%">
      <el-aside width="20%">
        <el-row type="flex">
          <el-col :span="6"></el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row type="flex">
          <el-col>
            <el-card shadow="always" style="background-color:#f9fafc;border-radius: 10px;">
              <el-row style="width:100%;color: #3a8ee6">分类</el-row>
              <el-divider></el-divider>
              <el-row type="flex" style="margin-top:10px;font-size: 16px;" v-for="(item,index) in categories"
                      :key="index">
                <el-col :span="12" style="text-align: left;color: #409eff">{{item.categoryName}}</el-col>
                <el-col :span="6" :offset="6" style="color:#bbb;font-size:13px">{{item.nums}}篇</el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-aside>
      <el-main style="margin-left: 2%;padding: 0">
        <Article :isVisible="showArticle" :num="num"></Article>
<!--        <component v-bind:is="mainComponent"></component>-->
        <!--        <Archive :archiveVisible="showArchive"></Archive>-->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Article from "./Article";
  import Markdown from "./Markdown";
  import Login from "../login/index";
  import Archive from "./Archive";
  import ArticleDetail from "./ArticleDetail";

  export default {
    name: "Layout",
    data() {
      return {
        showArticle: false,
        propsOption: {
          showArticleDetail: false
        },
        mainComponent: {},
        categories: [],
        showArchive: false,
        activeIndex: '1',
        activeName: 'second',
        drawer: false,
        direction: "rtl",
        isColorBlack: false,
        search: "",
        num: 0
      };
    },
    components: {
      Markdown,
      Article,
      Login,
      Archive,
      ArticleDetail
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
      handleSelect(key, keyPath) {
        switch (key) {
          case '1':
            this.getArticle()
            break;
          case '3':
            break;
          case '4':
            this.getArchive()
            break
        }
      },
      closeDrawer() {
        this.drawer = false;
      },
      handleClose(done) {
        done();
      },
      async getArticle() {
        this.showArticle = true
        this.mainComponent = {}
        this.num++
      },

      getArchive() {
        this.showArticle = false;
        this.mainComponent = Archive;
      }
    },
    created() {
      this.getArticleCategory();
      this.getArticle();
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


