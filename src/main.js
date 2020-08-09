import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/main.css'
import './assets/fonts.css'
import VideoBg from 'vue-videobg'
import { VueTyper } from 'vue-typer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
const moment = require('moment')
require('moment/locale/ru')
Vue.use(require('vue-moment'), {
  moment
})
console.log(Vue.moment().locale())
Vue.use(Viewer)
AOS.init()
Vue.component('vue-typer', VueTyper)
Vue.component('video-bg', VideoBg)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
