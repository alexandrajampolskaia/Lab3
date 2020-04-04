<template>
  <div id="app">
    <DeleteReport />
  </div>
</template>

<script>
import DeleteReport from "./components/DeleteReport.vue";

export default {
  name: "App",
  components: {
    DeleteReport
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
