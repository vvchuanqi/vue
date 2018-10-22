import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
import tabs from '@/pages/tabs'
import home from '@/pages/home/index'
import stage1 from '@/pages/stage1/index'
import stage2 from '@/pages/stage2/index'
import my from '@/pages/my/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: login
  },{
    path: '/tabs',
    name: 'tabs',
    component: tabs,
    redirect: "/tabs/home",
    children: [
      {
        path: "home",
        name: "home",
        component: home
      },{
        path: "stage1",
        name: "stage1",
        component: stage1
      },{
        path: "stage2",
        name: "stage2",
        component: stage2
      },{
        path: "my",
        name: "my",
        component: my
      }]
  }]
})
