<template>
  <div id="app">
    <headerBar v-if="!($route.name == 'login' || $route.name == 'regist')"></headerBar>
    <router-view/>
    <backTop/>
    <!-- <footerBar v-if="!($route.name == 'login' || $route.name == 'regist')"></footerBar> -->
  </div>
</template>
<script>
import headerBar from '_c/headerBar/headerBar'
import backTop from '_c/backTop/backTop'
// import footerBar from '_c/footerBar/footerBar'
export default {
  name:'app',
  components:{
    headerBar,
    backTop
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
  font-style: normal;
  //  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  margin: 0;
  padding: 0;
  // box-sizing: content-box;
  // box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
    // box-sizing: border-box;
}
.scroll-content::-webkit-scrollbar {
    width:0;
    height:0;
}
</style>
