<template>
  <el-container v-if="isVisible">
    <el-aside width="350px">
      <el-row type="flex">
        <el-col :span="6"></el-col>
        <el-col :span="12"></el-col>
      </el-row>
      <el-row type="flex" style="margin-top:40px;">
        <el-col>
          <el-card shadow="never" style="background-color:#f9fafc">

            <el-row style="width:100%;color: #3a8ee6">文章分类</el-row>
            <el-divider></el-divider>
            <el-row type="flex" style="margin-top:10px;font-size: 14px;" v-for="item in categores">
              <el-col :span="12" style="text-align: left;font-family:'song'">{{item.categoryName}}</el-col>
              <el-col :span="8"></el-col>
              <el-col :span="6" style="color:#bbb;font-size:13px">{{item.nums}}篇</el-col>

            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-aside>
    <el-main style="margin-top: 10px">
      <el-container style="width: 100%;margin-top: 10px" v-if="showArticleDetail">
        <mavon-editor
          style="width:100%;background-color:#ffffff"
          :boxShadow="false"
          :value="value"
          :subfield="false"
          :toolbarsFlag="false"
          :defaultOpen="'preview'"
          :editable="false"
          navigation
        />
        <!-- <span v-html="value"></span> -->
      </el-container>
      <el-container
        style="width: 100%; display: flex; flex-direction: column"
        v-else-if="showArticleDetail === false"
      >
        <el-card
          style="width:100%;height:120px;background-color:#f9fafc; margin:5px;"
          shadow="never"
          v-for="item in articles"
        >
          <el-row>
            <div class="article-title" @click="getArticleDetail(item)">{{item.articleTitle}}</div>
          </el-row>
          <!--            <el-row>-->
          <!--              <div style="width:100%;height:100px; text-align: left;">{{item.articleContent}}</div>-->
          <!--            </el-row>-->

          <el-row type="flex" style="text-align: left;color: #bbb;font-size:14px">
            <el-col :span="2">
              评论次数 &nbsp;
              <span style="color: #409eff">{{item.articleComment}}</span>
            </el-col>
            <el-col :span="2">
              阅读次数 &nbsp;
              <span style="color: #409eff">{{item.articleRead}}</span>
            </el-col>
            <el-col :span="2">
              点赞次数&nbsp;
              <span style="color: #409eff">{{item.articleLike}}</span>
            </el-col>
            <el-col :span="8"></el-col>
            <el-col :span="10" style="text-align: right">
              发布时间&nbsp;
              <span style="color: #409eff">{{item.gmtCreate}}</span>
            </el-col>
          </el-row>
          <el-row>
            <div style="height: 10px"></div>
          </el-row>
        </el-card>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  name: "Article",
  data() {
    return {
      categores: [],
      showArticleDetail: false,
      articles: [],
      count: 0
    };
  },
  props: {
    isVisible: Boolean,
    num: Number
  },
  methods: {
    getArticleCategory() {
      this.$axios
        .get("/article/category/list")
        .then(res => {
          console.log(res);
          this.categores = res.data.data;
        })
        .catch(() => {});
    },
    getArticles() {
      this.$axios
        .get("/article/page", {
          page: 1,
          limit: 10
        })
        .then(res => {
          console.log(res);
          this.articles = res.data.data.items;
        })
        .catch(() => {});
    },
    getArticleDetail(item) {
      // var marked = require('marked');
      // this.value = marked(item.articleContent);
      this.value = item.articleContent;
      this.showArticleDetail = true;
      this.showArticles = false;
    }
  },
  components: {
    VueMarkdown
  },
  created() {
    this.getArticles();
    this.getArticleCategory();
  },
  watch: {
    num(val) {
      if (val != this.count) {
        this.count = val;
        this.showArticleDetail = false;
      }
    }
  }
};
</script>

<style scoped>
.article-title {
  width: 100%;
  height: 60px;
  font-family: "Microsoft YaHei", "SF Pro Display", Roboto, Noto, Arial,
    "PingFang SC", sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  line-height: 50px;
  cursor: pointer;
}
</style>
