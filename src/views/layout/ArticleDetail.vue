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
  import VueMarkdown from "vue-markdown";

  export default {
    name: "Article",
    data() {
      return {

      };
    },
    props: {
      value: String
    },
    methods: {

    },
    components: {
      VueMarkdown
    },


  };
</script>

<style scoped>

</style>
