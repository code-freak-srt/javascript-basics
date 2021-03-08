<template>
  <div id="app">
    {{ msg }}
    <students></students>
    <header></header>
    <students></students>
  </div>
</template>

<script>
import header from './components/header.vue'
import students from './components/students.vue';

export default {
  components:{
    'header': header,
    'students': students,
    Students,
    },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style></style>
