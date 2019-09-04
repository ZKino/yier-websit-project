import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '*', redirect: '/home'},
    {path: '/home', component: () => import('@/pages/home/Home'), name: 'home'},
    {path: '/service', component: () => import('@/pages/service/Service'), name: 'service'},
    {path: '/case', component: () => import('@/pages/case/Case'), name: 'case'},
    {path: '/new', component: () => import('@/pages/new/New'), name: 'new'},
    {path: '/about', component: () => import('@/pages/about/About'), name: 'about'},
    {path: '/join', component: () => import('@/pages/join/Join'), name: 'join'},
    {path: '/contact', component: () => import('@/pages/contact/Contact'), name: 'contact'}
  ],
  mode: 'history',
  linkActiveClass: 'linkActiveClass'
})
