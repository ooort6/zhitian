import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import store from './store/index'
import iview from 'iview'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css';
import axios from 'axios'
import './assets/js/main.js'

// import './assets/css/main.css'

axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
// axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers['Access-Control-Allow-Origin']='*'
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['access-control-allow-origin'] = '*';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';


Vue.config.productionTip = false
Vue.use(iview)
Vue.use(Router)
Vue.use(Vuex)
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
