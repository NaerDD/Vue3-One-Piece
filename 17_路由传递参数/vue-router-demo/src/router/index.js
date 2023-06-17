import { createRouter, createWebHashHistory } from 'vue-router'
// 同步加载 首页不管用不用都要加载
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // 异步加载 没有引用就不会加载
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/news',
    name: 'news',
    // 异步加载 没有引用就不会加载
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/newsdetails/:name',
    name: 'newsdetails',
    // 异步加载 没有引用就不会加载
    component: () => import('../views/NewsDetailsViews.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
