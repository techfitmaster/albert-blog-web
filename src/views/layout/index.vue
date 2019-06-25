<template>
  <el-container style=" background-color:#ffffff;">
    <el-header height="150px">
      <el-row type="flex" >
        <el-col style="height:150px;line-height: 150px;">标题</el-col>
        <el-col style="height:150px;line-height: 150px;">
            <el-row type="flex" style="text-align:center">
                <el-row>文章</el-row>
                <el-row>管理</el-row>
            </el-row>
        </el-col>
        <el-col style="height:150px;line-height: 150px;">contact</el-col>
      </el-row>
    </el-header>
    <el-container style="margin-top:10px">
      <el-aside width="10%"></el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-aside width="400px" style="margin-left:10px;  background-color: #e9eef3">Aside</el-aside>
      </el-container>
      <el-aside width="10%"></el-aside>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Layout"
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
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-col {
     background-color: antiquewhite;
     height :100%;
}
</style>


