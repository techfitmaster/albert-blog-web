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
      <el-row type="flex" >
        <el-col :span="12" style="font-size: 30px;
    font-weight: 400">爱折腾的Albert</el-col>
        <el-col :span="6">
          <el-row type="flex" >
            <el-col :span="6" style></el-col>
            <el-col :span="6">
              <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
            </el-col>
            <el-col :span="3" style>
              <div @click="getArticle">文章</div>
            </el-col>
            <el-col :span="3">
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
      <el-aside width="15%"></el-aside>
      <el-container v-if="showArticle">
        <el-main>
          <el-timeline>
            <el-timeline-item
              timestamp="2018/4/12"
              placement="top"
              v-for="(index,item) in articles"
              :key="index"
            >
              <el-card style="with:100%;height:200px;background-color:#e9eef3; margin:10px">
                <div style="with:100%;height:50px;">1</div>
                <div style="with:100%;height:150px;">文章内容</div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-main>
        <el-aside width="400px" style="margin-left:10px;">
          <el-row type="flex" style="margin-top:10px">
            <el-col :span="6"></el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row type="flex" v-for="(index,item) in articles"
              :key="index">
            <el-col :span="2"></el-col>
            <el-col :span="20">
              <div style="height:200px;width:100%;margin-top:20px;background-color:#e9eef3">排行</div>
            </el-col>
          </el-row>
      
        </el-aside>
      </el-container>
      <el-container v-if="showManage">
        <el-main>管理页面</el-main>
      </el-container>
      <el-aside width="15%"></el-aside>
    </el-container>
  </el-container>
</template>

<script>
import { fail } from "assert";
export default {
  name: "Layout",
  data() {
    return {
      showArticle: true,
      showManage: false,
      articles: [{}, {}, {}, {}, {}, {}, {}, {}]
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
.el-header {
  /* background-color: #e9eef3; */
  color: #333;
  height: 500;
}
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
}

.box-card {
  height: 200px;
}
</style>


