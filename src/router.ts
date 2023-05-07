import { RouterOptions } from "vite-ssg"

const router: RouterOptions = {
  routes: [
    {
      path: '/',
      component: () => import('./pages/home/HomePage.vue')
    }
  ]
}

export default router