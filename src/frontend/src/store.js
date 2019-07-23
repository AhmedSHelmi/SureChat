import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
   
    GET_USER: (state) => {
      let endpoint = 'api/accounts/me/';
      axios.get(endpoint).then(response => {
        state.user.id = response.data.id;
        state.user.username = response.data.username;
        state.user.email = response.data.email;
      }).catch(error => {
        console.log(error)
      })
    }
  },
  actions: {

  },
  getters: {
   
  },
})
