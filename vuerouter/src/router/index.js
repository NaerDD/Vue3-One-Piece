import { createRouter,createWebHashHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"

//配置信息中需要页面的相关配置

const routes = [
  {
    path:"/",
    component:HomeView
  },
  {
    path:"/about",
    component:AboutView
  }
]

const router = createRouter({
  /**
   * createWebHashHistory
   *  home:http://localhost:8080/#/
   * about:http://localhost:8080/#/about
   * 这种方式，不美观，不需要做更多操作
   * 原理：a标签的锚点链接
   * 
   * createWebHistory
   *  home:http://localhost:8080/
   * about:http://localhost:8080/about
   * 这种方式，美观 需要后台配合做重定向，否则回出现404问题
   * 原理 H5的pushState() 方法
   *  */ 
  history:createWebHashHistory(),
  routes
})

export default router;