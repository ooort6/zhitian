import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import store from './store/index'
import iview from 'iview'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(iview)
Vue.use(Router)
Vue.use(Vuex)
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
