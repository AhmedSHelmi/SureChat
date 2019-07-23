import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// axios.defaults.baseURL = 'http://54.246.132.23/'
axios.defaults.baseURL = 'http://localhost:8000/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
