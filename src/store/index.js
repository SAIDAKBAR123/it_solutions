import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isVisiting: false,
    isDarkMode: null
  },
  mutations: {
    darkmode (state, payload) {
      console.log('this is store', payload)
      state.isDarkMode = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
