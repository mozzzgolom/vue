import Vue from 'vue'
import  Router  from 'vue-router'

// @ts-ignore
import PageAbout from '../page/PageAbout'
// @ts-ignore
import PageDashboard from '../page/PageDashboard'
// @ts-ignore
import Page404 from '../page/Page404'

// @ts-ignore
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: { name: 'dashboard' },
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/dashboard/:page',
            component: PageDashboard
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/add/payment/:category', 
            component: PageDashboard,
            props: { clicked: true },
          },
        {
            path: '*',
            name: 'notFound',
            component: Page404,
        }
    ]
})