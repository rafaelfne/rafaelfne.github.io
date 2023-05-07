import { RouterOptions } from "vite-ssg"

const router: RouterOptions = {
  routes: [
    {
      path: '/',
      component: () => import('./pages/home/HomePage.vue')
    },
    {
      path: '/bloc-no-frontend',
      component: () => import('./pages/articles/BlocInFrontendArticle.vue')
    }
  ]
}

export default router