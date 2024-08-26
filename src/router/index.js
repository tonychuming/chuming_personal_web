import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // 可以添加更多路由
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router