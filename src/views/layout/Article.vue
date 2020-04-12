<template>
  <el-container  v-if="isVisible">
    <el-container v-if="showArticleDetail">
      <mavon-editor
        style="width:100%;background-color:#ffffff"
        :boxShadow="false"
        :value="value"
        :subfield="false"
        :toolbarsFlag="false"
        :defaultOpen="'preview'"
        :editable="false"
      />
    </el-container>
    <el-container
      style="display: flex; flex-direction: column"
      v-else-if="showArticleDetail === false"
    >
      <el-card
        style="height:100px;background-color:#f9fafc; margin-bottom:20px; border-radius: 10px;"
        shadow="never"
        v-for="(item,index) in articles"
        :key="index"
      >
        <el-row>
          <div class="article-title" @click="getArticleDetail(item)">{{item.articleTitle}}</div>
        </el-row>
        <el-row type="flex" style="text-align: left;color: #bbb;font-size:14px;margin-top: 10px;">
          <el-col :span="3">
            评论次数:
            <span style="color: #bbbbbb">{{item.commentTimes}}</span>
          </el-col>
          <el-col :span="3">
            阅读次数:
            <span style="color: #bbbbbb">{{item.readTimes}}</span>
          </el-col>
          <el-col :span="6">
            发布时间:
            <span style="color: #bbbbbb">{{item.createTime}}</span>
          </el-col>
        </el-row>
      </el-card>
    </el-container>
  </el-container>
</template>

<script>
  import VueMarkdown from "vue-markdown";

  export default {
    name: "Article",
    data() {
      return {
        showArticleDetail:false,
        articles: [],
        count: 0
      };
    },
    props: {
      isVisible: Boolean,
      num: Number,
      propsOption: Object
    },
    methods: {
      getArticleCategory() {
        this.$axios
          .get("/article/category/list")
          .then(res => {
            console.log(res);
            this.categores = res.data.data;
          })
          .catch(() => {
          });
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
          .catch(() => {
          });
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

    },
    watch: {
      num(val) {
        console.log(val)
        if (val !== this.count) {
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
    height: 40px;
    font-family: "Microsoft YaHei", "SF Pro Display", Roboto, Noto, Arial,
    "PingFang SC", sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    line-height: 40px;
    cursor: pointer;
  }
</style>
