<template>
  <div id="app">
    <Header />
    <div class="row">
      <div class="one-third column">
        <SideMenu />
      </div>
      <div class="one-third column">
        <List todos="todos" />
      </div>
      <div class="one-third column">
      </div>
    </div>
  </div>
</template>

<script>
import List from './components/List'
import Header from './components/Header'
import SideMenu from './components/SideMenu'

export default {
  name: 'app',
  components: {
    List,
    Header,
    SideMenu
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
