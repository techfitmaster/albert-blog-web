<template>
  <el-container style>
    <el-header
      height="100px"
      style="height:100px;line-height: 100px; color:#409eff;background-color:#ffffff ;
    font-weight: 400;
    z-index:999;
    position: fixed;
    left:0;
    right:0;
     top:0"
    >
      <el-row type="flex">
        <el-col :span="12" style="font-size: 30px;
    font-weight: bold;">爱折腾的Albert
        </el-col>
        <el-col :span="6">
          <el-row type="flex">
            <el-col :span="12">
              <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="search"></el-input>
            </el-col>
            <el-col :span="4"></el-col>
            <el-col :span="4" style>
              <div @click="getArticle">文章</div>
            </el-col>
            <el-col :span="4">
              <div @click="getManage">管理</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <div>联系我</div>
        </el-col>
      </el-row>
      <el-row>
        <div style="height:1px; background-color: #e9eef3;"></div>
      </el-row>
    </el-header>
    <el-container style="margin-top:100px">
      <el-aside width="10%"></el-aside>
      <el-container v-if="showArticle">
        <el-main>
          <el-timeline>
            <el-timeline-item
              timestamp="2018/4/12"
              placement="top"
              v-for="(item,index) in articles"
              :key="index"
            >
              <el-card style="with:100%;height:200px;background-color:#ffffff; margin:10px">
                <div
                  style="with:100%;height:50px;font-family: 'Microsoft YaHei','SF Pro Display',Roboto,Noto,Arial,'PingFang SC',sans-serif;font-size: 18px; font-weight: 400;"
                >{{item.title}}
                </div>
                <div style="with:100%;height:150px; text-align: left;">{{item.content}}</div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-main>
        <el-aside width="300px" style="margin-left:10px;">
          <el-row type="flex">
            <el-col :span="6"></el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row type="flex" style="margin-top:40px;">
            <el-col>
              <el-card shadow="always" style="background-color:#ffffff">
                <el-row style="width:100%;">
                  文章排行
                </el-row>
                <el-row type="flex" style="margin-top:10px;font-size: 14px;">
                  <el-col :span="12" style="text-align: left;">java源码</el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="6" style="color:#bbb">120阅读</el-col>
                </el-row>
                <el-row type="flex" style="margin-top:10px;font-size: 14px;">
                  <el-col :span="12" style="text-align: left;">java源码</el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="6" style="color:#bbb">120阅读</el-col>
                </el-row>
                <el-row type="flex" style="margin-top:10px;font-size: 14px;">
                  <el-col :span="12" style="text-align: left;">java源码</el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="6" style="color:#bbb">120阅读</el-col>
                </el-row>
                <el-row type="flex" style="margin-top:10px;font-size: 14px;">
                  <el-col :span="12" style="text-align: left;">java源码</el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="6" style="color:#bbb">120阅读</el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
          <el-row type="flex" style="margin-top:40px">
            <el-col>
              <el-card shadow="always" style="background-color:#ffffff">
                <el-row style="width:100%;">
                  文章排行
                </el-row>
                <el-row type="flex" style="margin-top:10px;font-size: 14px;">
                  <el-col :span="12" style="text-align: left;">java</el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="6" style="color:#bbb">12篇</el-col>
                </el-row>
                <el-row type="flex" style="margin-top:10px;font-size: 14px;">
                  <el-col :span="12" style="text-align: left;">spring</el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="6" style="color:#bbb">12篇</el-col>
                </el-row>
                <el-row type="flex" style="margin-top:10px;font-size: 14px;">
                  <el-col :span="12" style="text-align: left;">mybaits</el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="6" style="color:#bbb">12篇</el-col>
                </el-row>
                <el-row type="flex" style="margin-top:10px;font-size: 14px;">
                  <el-col :span="12" style="text-align: left;">hadoop</el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="6" style="color:#bbb">12篇</el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </el-aside>
      </el-container>
      <el-container v-if="showManage">
        <el-main>管理页面</el-main>
      </el-container>
      <el-aside width="10%"></el-aside>
    </el-container>
  </el-container>
</template>

<script>

  export default {
    name: "Layout",
    data() {
      return {
        showArticle: true,
        showManage: false,
        search: "",
        articles: [
          {
            title: "Vue 项目打包部署到nginx，请求时间长问题",
            content:
              "修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件"
          },
          {
            title: "Vue 项目打包部署到nginx，请求时间长问题",
            content:
              "修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件"
          },
          {
            title: "Vue 项目打包部署到nginx，请求时间长问题",
            content:
              "修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件"
          },
          {
            title: "Vue 项目打包部署到nginx，请求时间长问题",
            content:
              "修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件"
          },
          {
            title: "Vue 项目打包部署到nginx，请求时间长问题",
            content:
              "修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件"
          },
          {
            title: "Vue 项目打包部署到nginx，请求时间长问题",
            content:
              "修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件"
          },
          {
            title: "Vue 项目打包部署到nginx，请求时间长问题",
            content:
              "修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件"
          },
          {
            title: "Vue 项目打包部署到nginx，请求时间长问题",
            content:
              "修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件修改config/index.js文件"
          }
        ]
      };
    },
    methods: {
      getArticle() {
        (this.showArticle = true), (this.showManage = false);
      },
      getManage() {
        (this.showArticle = false), (this.showManage = true);
      }
    }
  };
</script>

<style scoped>

</style>


