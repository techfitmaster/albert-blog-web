<template>
  <div id="app">
    <transition name="el-fade-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
    export default {
        name: "App",
    };
</script>

<style>
  html, body,#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    height: 100%;
  }

  .fade-enter-active, .fade-leave-avtive {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .click-btn {
    cursor: pointer;
  }


  .click-btn:hover {
    color: #0010ff;
  }

  .box-shadow {
    cursor: pointer;
  }

  .box-shadow:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);border: 0
  }


  .router-link-active {
    text-decoration: none;
  }
</style>
