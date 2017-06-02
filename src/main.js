// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import vuex from 'vuex'
Vue.use(VueResource)
Vue.use(elementUi)
Vue.use(vuex)
//蒙版状态机过来过来搞事情
const store = new vuex.Store({
  state:{
    totalApi:'http://api/douban.com/v2',
    mengban:true
  },
  mutations:{
    show(state,data){
     state.mengban = data
    }
  }

})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
