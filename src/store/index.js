import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isVisiting: false,
    isDarkMode: null,
    isAboutPage: false
  },
  mutations: {
    aboutPage (state, payload) {
      state.isAboutPage = payload
    },
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
