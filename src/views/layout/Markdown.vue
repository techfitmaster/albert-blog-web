<template>
  <el-container v-if="isVisible">
    <el-header>
      <el-row type="flex">
        <el-col :span="6"></el-col>
        <el-col :span="10">
          <el-input
            type="input"
            :rows="2"
            placeholder="请输入标题"
            v-model="title">
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="publishArticle">发布文章</el-button>
        </el-col>
        <el-col :span="6">

        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <mavon-editor v-model="value"
                    class="mavon-editor"
                    navigation
                    @save="save"
                    @imgAdd="imgAdd"
                    @imgDel="imgDel"
                    :toolbars="toolbars" :boxShadow="false"/>
    </el-container>


    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      center>
      <el-form label-position="top">
        <el-form-item label="标签:">
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
          <el-button v-else class="button-new-tag" @click="showInput">+ 添加标签</el-button>
        </el-form-item>
        <el-form-item label="分类:">
          <el-row type="flex"  :gutter="10">
            <el-col :span="8">
              <el-input  type="input" v-model="categoryName"></el-input>
            </el-col>
            <el-col :span="2">
              <el-button plain @click="createCategory">添加</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="" style="background-color: rgba(78,137,148,0.07)">
          <el-checkbox-group v-model="articleCategory" style="margin: 10px" >
            <el-checkbox  :value="item.ukCategory" :label="item.categoryName" border v-for="item in options" style="margin-top: 10px"></el-checkbox>
          </el-checkbox-group>

        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="createArticle">发布文章</el-button>
  </span>
    </el-dialog>
  </el-container>


</template>

<script>
  export default {

    name: "Markdown",
    data() {

      return {
        categoryName: "",
        articleCategory: [],
        dynamicTags: [],
        options: [],
        inputVisible: false,
        inputValue: '',
        title: "",
        value: "",
        dialogVisible: false,
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
      }
    },
    methods: {
      save() {
        alert("保存回调")
      },
      imgAdd() {
        alert("添加图片回调")
      },
      imgDel() {
        alert("删除图片回调")
      },
      publishArticle() {
        this.dialogVisible = true

      },
      createArticle() {
        this.$axios
          .post("http://127.0.0.1:80/article", {
            "article": this.value,
            "tags": this.dynamicTags,
            "articleCategory": this.articleCategory,
            "title": this.title
          })
          .then(res => {

            this.dialogVisible = false
          })
          .catch(() => {
            this.$notify.error({
              title: '添加',
              message: '添加文章失败',
              showClose: false,
              duration: 1000,
            });
            this.dialogVisible = false
            this.$router.push('/layout');
          });

      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      getArticleCategory() {
        this.$axios
          .get("http://127.0.0.1:80/article/category/list")
          .then(res => {
            console.log(res);
            this.options = res.data.data
          })
          .catch(() => {
            this.$notify.error({
              title: '',
              message: '网络请求失败',
              showClose: false,
              duration: 1000,
            });
          });
      },
      createCategory() {
        alert(this.categoryName)
        this.$axios
          .post("http://127.0.0.1:80/article/category", {
            "categoryName": this.categoryName,
          })
          .then(res => {
            this.getArticleCategory();
          })
          .catch(() => {
            this.$notify.error({
              title: '',
              message: '网络请求失败',
              showClose: false,
              duration: 1000,
            });
          });

      },
      categoryChange(value) {
        this.categoryName = value;
        alert(this.categoryName)
      }
    },
    props: {
      isVisible: Boolean
    },
    created() {
      this.getArticleCategory();
    }
  }
</script>

<style scoped>
  .mavon-editor {
    width: 100%;
    height: 1000px;
    z-index: 0;
    border: 1px solid #ffffff
  }
  .el-header {
    margin-top: 10px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
