import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {createPinia, PiniaVuePlugin} from 'pinia'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  pinia,
  vuetify,
  render: h => h(App)
}).$mount('#app')
