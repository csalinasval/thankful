<template>
  <div id="app">
    <List todos="todos" />
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    List
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 60px;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
