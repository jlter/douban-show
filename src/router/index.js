import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import hot from '@/components/hot/hot'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {path:'/hot',component:hot}
  ]
})
