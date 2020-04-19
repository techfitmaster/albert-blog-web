<template>
  <el-container
    style="display: flex; flex-direction: column"
  >
    <el-card
      style="height:100px;background-color:#f9fafc; margin-bottom:30px; border-radius: 10px; border: 0"
      class="box-shadow"
      shadow="never"
      v-for="(item,index) in articles"
      :key="index"
    >
      <el-row>
        <div class="article-title" @click="goArticleDetail(item)">{{item.articleTitle}}</div>
      </el-row>
      <el-row type="flex" style="color: #bbb;font-size:14px;margin-top: 10px;width: 800px">
        <el-col :span="3">
          评论次数:
          <span style="color: #bbbbbb">{{item.commentTimes}}</span>
        </el-col>
        <el-col :span="4">
          阅读次数:
          <span style="color: #bbbbbb">{{item.readTimes}}</span>
        </el-col>
        <el-col :span="8">
          发布时间:
          <span style="color: #bbbbbb">{{item.createTime}}</span>
        </el-col>
      </el-row>
    </el-card>
  </el-container>
</template>

<script>

  export default {
    name: "ArticleList",
    data() {
      return {
        articles: [],
        key: null,
        categoryId: null
      };
    },
    created() {
      this.key = this.$route.params.key;
      this.categoryId = this.$route.params.categoryId;
      this.getArticles();

    },

    watch: {
      $route() {
        this.key = this.$route.params.key;
        this.categoryId = this.$route.params.categoryId;
        this.getArticles(); //路由变化时就重新执行这个方法 更新传来的参数
      }
    },
    methods: {
      getArticles() {
        this.$axios.get("/article/page", {
          params: {
            page: 1,
            limit: 10,
            categoryId: this.categoryId,
            key: this.key
          }

        }).then(res => {
          console.log(res);
          this.articles = res.data.data.items;
        }).catch(() => {
        });
      },
      goArticleDetail(item) {
        this.$router.push({
          path: '/article/' + item.id,
          query: {
            id: item.id
          }
        });
      }
    }
  }
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
