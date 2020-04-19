<template>
  <div>
    <el-row>
      <el-col :span="24">
        <mavon-editor
          style="width:100%;background-color:#ffffff;font-size: 16px"
          class="box-shadow"
          :boxShadow="true"
          :value="articleDetail.markdown"
          :subfield="false"
          :toolbarsFlag="false"
          :defaultOpen="'preview'"
          :editable="false"
        />
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-input
        type="textarea"
        placeholder="请输入评论"
        v-model="comments"
        autosize
      >
      </el-input>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-col :span="7">
        <el-input v-model="input1">
          <template slot="prepend">姓名</template>
        </el-input>
      </el-col>
      <el-col :span="7">
        <el-input v-model="input2">
          <template slot="prepend">邮箱</template>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">评论</el-button>
      </el-col>


    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="24">
        <el-card>
          <div slot="header" style="text-align: left; font-weight: bold">
            <span>评论</span>
          </div>
          <div v-for="o in 4" :key="o" style="text-align: left; margin-top: 10px">
            <el-row style="padding: 20px">
              <el-col :span="4"><span style="font-size: 16px;line-height: 20px">匿名用户</span></el-col>
              <el-col :span="4"><span style="font-size: 10px;color: #bbbbbb; margin-bottom: 0">2020-04-16 17:51</span>
              </el-col>
            </el-row>
            <el-row style="padding-left: 40px">
              <el-col :span="24">
                <span style="font-size: 15px;padding: 10px">。。。。。。。。。。这个文章不错。。。。。。。。。。。。这个文章不错。。。。。。。。。。。。</span>
              </el-col>
            </el-row>
            <el-divider></el-divider>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-backtop></el-backtop>
  </div>

</template>

<script>
  export default {
    name: "ArticleDetail",
    data() {
      return {
        input1: "",
        input2: "",
        comments: "",
        articleDetail: {},
      };
    },
    methods: {
      getArticleDetail() {
        this.$axios
          .get("/article/" + this.$route.query.id )
          .then(res => {
            console.log(res);
            this.articleDetail = res.data.data;
          })
          .catch(() => {
          });
      },
    },

    created() {
      this.getArticleDetail()
    },

  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
