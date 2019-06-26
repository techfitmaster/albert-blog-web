<template>
  <el-container style=" background-color:#ffffff;">
    <el-header height="150px">
      <el-row type="flex">
        <el-col style="height:150px;line-height: 150px;">标题</el-col>
        <el-col style="height:150px;line-height: 150px;">
          <el-row type="flex" style="text-align:center;background-color:#ffffff">
            <el-col :span="12" style></el-col>
            <el-col :span="3" style>
              <div @click="getArticle">文章</div>
            </el-col>
            <el-col :span="3">
              <div @click="getManage">管理</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col style="height:150px;line-height: 150px;">contact</el-col>
      </el-row>
    </el-header>
    <el-container style="margin-top:10px">
      <el-aside width="10%"></el-aside>
      <el-container v-if="showArticle">
        <el-main>
          <div style="with:100%;height:200px;background-color:#ffffff; margin:10px">
            <div style="with:100%;height:50px;">1</div>
            <div style="with:100%;height:150px;">文章内容</div>
          </div>
          <div style="with:100%;height:200px;background-color:#ffffff; margin:10px">
            <div style="with:100%;height:50px;">1</div>
            <div style="with:100%;height:150px;">文章内容</div>
          </div>
          <div style="with:100%;height:200px;background-color:#ffffff; margin:10px">
            <div style="with:100%;height:50px;">1</div>
            <div style="with:100%;height:150px;">文章内容</div>
          </div>
        </el-main>
        <el-aside width="400px" style="margin-left:10px;  background-color: #e9eef3">
          <el-row type="flex" style="margin-top:10px">
            <el-col :span="6"></el-col>
            <el-col :span="12">
              <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
              <div style="height:200px;width:100%;margin-top:20px;background-color:#ffffff">排行</div>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="2"></el-col>
            <el-col :span="20">
              <div style="height:200px;width:100%;margin-top:20px;background-color:#ffffff">分离</div>
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
import { fail } from "assert";
export default {
  name: "Layout",
  data() {
    return {
      showArticle: true,
      showManage: false
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
  background-color: #e9eef3;
  color: #333;
  height: 500;
}
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

.box-card {
  height: 200px;
}
</style>


