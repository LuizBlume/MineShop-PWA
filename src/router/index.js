import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EndView from '../views/EndView.vue'
import NetherView from '../views/NetherView.vue'
import OverworldView from '../views/OverworldView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/end',
      name: 'end',
      component: EndView,
    },
    {
      path: '/nether',
      name: 'nether',
      component: NetherView,
    },
    {
      path: '/overworld',
      name: 'overworld',
      component: OverworldView,
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    }
  ],
})

export default router
