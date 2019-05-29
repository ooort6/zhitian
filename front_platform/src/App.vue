<template>
  <div id="app">
    <headerBar v-if="!($route.name == 'login' || $route.name == 'regist')"></headerBar>
    <router-view/>
    <!-- <footerBar v-if="!($route.name == 'login' || $route.name == 'regist')"></footerBar> -->
  </div>
</template>
<script>
import headerBar from '_c/headerBar/headerBar'
// import footerBar from '_c/footerBar/footerBar'
export default {
  name:'app',
  components:{
    headerBar,
    // footerBar
  },
  data() {
    return {
    }
  },
}
</script>


<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-style: normal
}
html,body{
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
