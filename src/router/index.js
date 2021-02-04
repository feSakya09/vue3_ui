import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout/index'
import Review from '../views/Home.vue'
import Home from '../views/home/Home'
import Install from '../views/install/Install'
import Mobile from "../views/mobile/Mobile";
import Log from "../views/log/Log";
import DemoIndex from '../components/demoPage/demoIndex'
import DemoButton from '../components/demoPage/button'
import DemoCell from '../components/demoPage/cell'
import DemoAlert from '../components/demoPage/alert'
import DemoMsgBox from '../components/demoPage/messageBox'
import DemoCard from '../components/demoPage/card'
import DemoToast from '../components/demoPage/toast'
import DemoScroll from '../components/demoPage/scroll'

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'WebSite',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/install',
        name: 'Install',
        component: Install
      },
      {
        path: '/mobile',
        name: 'Mobile',
        component: Mobile
      },
      {
        path: '/log',
        name: 'Log',
        component: Log
      }
    ]
  },
  {
    path: '/review',
    name: 'Review',
    component: Review
  },
  {
    path: '/demoIndex',
    name: 'DemoIndex',
    component: DemoIndex,
    children: [
      {
        path: 'button',
        name: 'DemoButton',
        component: DemoButton
      },
      {
        path: 'cell',
        name: 'DemoCell',
        component: DemoCell
      },
      {
        path: 'alert',
        name: 'DemoAlert',
        component: DemoAlert
      },
      {
        path: 'messageBox',
        name: 'DemoMsgBox',
        component: DemoMsgBox
      },
      {
        path: 'card',
        name: 'DemoCard',
        component: DemoCard
      },
      {
        path: 'toast',
        name: 'DemoToast',
        component: DemoToast
      },
      {
        path: 'scroll',
        name: 'DemoScroll',
        component: DemoScroll
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
