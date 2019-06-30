<template>
  <el-container v-if="isVisible">
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
    <el-main>
      <el-container style="margin-top:20px; width: 100%;" v-if="showArticleDetail">
        <mavon-editor style="width:100%; z-index:0; border: 1px solid #ffffff"
                      :boxShadow="false"
                      :value="value"
                      :subfield="false"
                      :toolbarsFlag="false"
                      :defaultOpen="'preview'"
                      :editable="false"

        />
      </el-container>
      <el-timeline v-else-if="showArticleDetail===false">
        <el-timeline-item
          timestamp="2018/4/12"
          placement="top"
          v-for="(item,index) in articles"
          :key="index"

        >
          <el-card style="with:100%;height:200px;background-color:#ffffff; margin:10px">
            <div
              style="with:100%;height:50px;font-family: 'Microsoft YaHei','SF Pro Display',Roboto,Noto,Arial,'PingFang SC',sans-serif;font-size: 18px; font-weight: 400;"
              @click="getArticleDetail">{{item.title}}
            </div>
            <div style="with:100%;height:100px; text-align: left;">{{item.content}}</div>
            <el-row type="flex">
              <el-col :span="4">评论12</el-col>
              <el-col :span="4">阅读2000</el-col>
              <el-col :span="16"></el-col>
            </el-row>

          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "Article",
    data() {
      return {
        showArticleDetail: false,
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
          }
        ],
      }
    },
    props:{
      isVisible:Boolean
    },
    methods: {
      getArticleDetail() {
        this.showArticleDetail = true;
      }
    },

  }


</script>

<style scoped>

</style>
