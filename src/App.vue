<template>
  <div id="app">
    <Layout />
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from './layout';

export default {
  name: 'app',
  components: {
      Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
