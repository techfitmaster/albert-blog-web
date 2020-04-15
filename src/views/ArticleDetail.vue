<template>
  <el-container>
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

</template>

<script>
  export default {
    name: "ArticleDetail"
    , data() {
      return {
        value: '',
      };
    },

    created() {
      this.value = this.$route.query.value
    },

  }
</script>

<style scoped>

</style>
