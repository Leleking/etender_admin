// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import store from './store'
import plugins from './utils/plugins'

Vue.use(plugins)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
