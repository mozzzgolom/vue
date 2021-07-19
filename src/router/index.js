import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'Dashboard' },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      // @ts-ignore
      component: () => import( '../page/PageDashboard.vue'),
    },
    {
      path: '/dashboard/:page',
      // @ts-ignore
      component: () => import( '../page/PageDashboard.vue'),
    },
    {
      path: '/about',
      name: 'About',
      // @ts-ignore
      component: () => import( '../page/PageAbout.vue'),
    },
    {
      path: '/add/payment/:category',
      // @ts-ignore
      component: () => import( '../page/PageDashboard.vue'),
      props: { openPaymentForm: true },
    },
    {
      path: '/404',
      name: 'NotFound',
      // @ts-ignore
      component: () => import('../page/Page404.vue'),
    },
    {
      path: '*',
      redirect: { name: 'NotFound' }
    },
  ]
})