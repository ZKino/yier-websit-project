import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '*', redirect: '/home'},
    {path: '/home', component: () => import('@/pages/home/Home'), name: 'home'},
    {path: '/service', component: () => import('@/pages/service/Service'), name: 'service'},
    {
      path: '/case',
      component: () => import('@/pages/case/Case'),
      name: 'case',
      redirect: '/case/design',
      linkActiveClass: 'linkActiveClass',
      children: [
        {path: '/case/design', component: () => import('@/pages/case/design'), name: 'design'},
        {path: '/case/ui', component: () => import('@/pages/case/ui'), name: 'ui'},
        {path: '/case/program', component: () => import('@/pages/case/program'), name: 'program'},
        {path: '/case/tv', component: () => import('@/pages/case/tv'), name: 'tv'},
        {path: '/case/ad', component: () => import('@/pages/case/ad'), name: 'ad'}
      ]
    },
    {
      path: '/new',
      component: () => import('@/pages/new/New'),
      name: 'new',
      redirect: '/new/signing',
      linkActiveClass: 'linkActiveClass',
      children: [
        {path: '/new/signing', component: () => import('@/pages/new/signing'), name: 'signing'},
        {path: '/new/company', component: () => import('@/pages/new/company'), name: 'company'},
        {path: '/new/design', component: () => import('@/pages/new/design'), name: 'design'},
        {path: '/new/product', component: () => import('@/pages/new/product'), name: 'product'},
        {path: '/new/industry', component: () => import('@/pages/new/industry'), name: 'industry'},
        {path: '/new/development', component: () => import('@/pages/new/development'), name: 'development'}
      ]
    },
    {path: '/about', component: () => import('@/pages/about/About'), name: 'about'},
    {path: '/join', component: () => import('@/pages/join/Join'), name: 'join'},
    {path: '/contact', component: () => import('@/pages/contact/Contact'), name: 'contact'},
    {path: '/new/:id', component: () => import('@/pages/new/NewDetail'), name: 'newDetail'}
  ],
  mode: 'history',
  linkActiveClass: 'linkActiveClass'
})
