import { createRouter, createWebHistory } from 'vue-router'
import routes from 'vue-router/auto-routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_BASE_URL.slice(1)),
    routes
})

export default router
