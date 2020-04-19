<template>
  <el-container>
    <el-aside width="25%" >
      <el-row type="flex">
        <el-col :span="6"></el-col>
        <el-col :span="12"></el-col>
      </el-row>
      <el-row type="flex">
        <el-col>
          <el-card  shadow="never" style="background-color:#f9fafc; border-radius: 10px;border: 0" class="box-shadow" >
            <el-row style="width:100%;color: #3a8ee6">
              <div @click="goHome()" class="click-btn" style="font-weight: bold">分类</div>
            </el-row>
            <el-divider></el-divider>
            <el-row  type="flex" style="margin-top:5px;font-size: 16px; padding: 10px" v-for="(item,index) in categories"
                    :key="index">
              <el-col :span="12" style="text-align: left;color: #409eff">
                <div class="click-btn" @click="goArticleList(item)">{{item.categoryName}}</div>
              </el-col>
              <el-col :span="6" :offset="6" style="color:#bbb;font-size:13px">{{item.nums}}篇</el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-aside>
    <el-main style="margin-left: 2%;padding: 0;">
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
    </el-main>

  </el-container>
</template>

<script>

  export default {
    name: "Article",
    data() {
      return {
        categories: [],

      };
    },
    methods: {
      getArticleCategory() {
        this.$axios
          .get("/article/category/list")
          .then(res => {
            console.log(res);
            this.categories = res.data.data;
          })
          .catch(() => {
          });
      },
      goHome() {
        this.$router.push({path: '/'})
      },
      goArticleList(item) {
        this.$router.push({
          path: '/article/list/' + item.id + '/0' ,
        })
      }
    },

    created() {
      this.getArticleCategory()

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
