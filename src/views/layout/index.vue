<template>
  <el-container>
    <el-header
      height="80px"
      style="height:100px;line-height: 100px; color:#409eff;background-color:#ffffff ;
    font-weight: 400;
    z-index:999;
    position: fixed;
    left:0;
    right:0;
     top:0"
    >
      <el-row type="flex">
        <el-col :span="10" style="font-size: 30px;
    font-weight: bold;">爱折腾的Albert
        </el-col>
        <el-col :span="8">
          <el-row type="flex">
            <el-col :span="8">
              <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="search"></el-input>
            </el-col>
            <el-col :span="4"></el-col>
            <el-col :span="4">
              <div @click="writeMarkDown">写文章</div>
            </el-col>
            <el-col :span="4">
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
    <el-container style="margin-top:100px" v-if="showMarkDown == false">
      <el-aside width="10%"></el-aside>
      <el-container v-if="showArticle">
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
                          :toolbars="showtoolbars"



            />
          </el-container>
          <el-timeline v-else-if="showArticleDetail==false">
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
      <el-container v-if="showManage">
        <el-main>
          <el-container>
            <el-aside shadow="always">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">

                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>文章管理</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">评论管理</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">文章管理</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">系统管理</span>
                </el-menu-item>
              </el-menu>
            </el-aside>
            <el-main style="margin-left: 50px">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  label="日期"
                  width="120">
                  <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
      <el-aside width="10%"></el-aside>
    </el-container>
    <el-container style="margin-top:100px; width: 100%" v-if="showMarkDown">
      <div style="width: 10%;float: left;"></div>
      <mavon-editor v-model="value" navigation="true"
                    style="width:80%;height: 1000px; z-index:0; border: 1px solid #EBEEF5"
                    :toolbars="toolbars" :boxShadow="false"/>
      <div style="width: 10%;float: left"></div>
    </el-container>
  </el-container>
</template>

<script>

  export default {
    name: "Layout",
    data() {
      return {
        showArticleDetail: false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        showArticle: true,
        showManage: false,
        showMarkDown: false,
        value: "@[TOC](shell校本使用)\n" +
          "\n" +
          "# 1. 创建\n" +
          "\n" +
          "1. 创建.sh文件\n" +
          "2. 用#! /bin/bash 开头\n" +
          "\n" +
          "案例\n" +
          "\n" +
          "```\n" +
          "#!/bin/bash\n" +
          "\n" +
          "echo \"test\"\n" +
          "```\n" +
          "\n" +
          "\n" +
          "\n" +
          "# 2. 执行shell脚本\n" +
          "\n" +
          "\n" +
          "\n" +
          "```\n" +
          "# 方法一(推荐使用)\n" +
          "bash [name]\n" +
          "\n" +
          "# 方法二(没有可执行权限不可用)\n" +
          "./[name]\n" +
          "\n" +
          "# 方法三(中间有空格):使用此方法可获取内部变量,类似source作用\n" +
          ". [name]\n" +
          "```\n" +
          "\n" +
          "\n" +
          "\n" +
          "# 3. 编写规范\n" +
          "\n" +
          "1. 开头脚本解释器 #!/bin/bash\n" +
          "2. 添加版权信息\n" +
          "\n" +
          "```\n" +
          "# Date: \n" +
          "# Author:\n" +
          "# Mail:\n" +
          "# Fuction:\n" +
          "# Version:\n" +
          "```\n" +
          "\n" +
          "# 4. 变量定义\n" +
          "\n" +
          "\n" +
          "```\n" +
          "# 无符号:直接定义内容\n" +
          "a=192.168.1.2-$a\n" +
          "\n" +
          "# 单引号:直接显示引号内容\n" +
          "b='192.168.1.2-$a'\n" +
          "\n" +
          "# 双引号: 会通过解析里面的变量\n" +
          "c=\"192.168.1.2-$a\"\n" +
          "```\n" +
          "\n" +
          "\n",
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
          }
        ],
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
        },
        showtoolbars: {}
      };
    },
    methods: {
      getArticle() {
        (this.showArticle = true), (this.showManage = false);
        this.showMarkDown = false;
        this.showArticleDetail = false
      },
      getManage() {
        (this.showArticle = false), (this.showManage = true);
        this.showMarkDown = false;
      },
      writeMarkDown() {
        this.showMarkDown = true;
      },
      getArticleDetail() {
        this.showArticleDetail = true
      }
    }
  };
</script>

<style scoped>

</style>


