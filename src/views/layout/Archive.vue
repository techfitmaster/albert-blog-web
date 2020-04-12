<template>
  <el-container  style="padding-left: 20%">
    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in articles"
        :key="index"
        :timestamp="activity.timestamp">
        {{activity.articleTitle}}
      </el-timeline-item>
    </el-timeline>
  </el-container>
</template>

<script>
  export default {
    name: "Archive",
    data() {
      return {
        articles: [],
        categores: [],
        reverse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }]

      }
    },
    props:{
      archiveVisible:Boolean
    },
    methods: {
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
      }
    },
    created() {
      this.getArticles();
    }
  }
</script>

<style scoped>

</style>
