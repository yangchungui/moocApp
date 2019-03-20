
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }

})
