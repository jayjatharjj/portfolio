import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import HomePage from '../views/HomePage.vue'
import WorkExperiencePage from '../views/WorkExperiencePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: LandingPage,
      meta: {
        middleware: "auth",
        preserveQuery: true
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/work',
          name: 'work',
          component: WorkExperiencePage,
        }
      ]
    },
  ],
})

export default router
