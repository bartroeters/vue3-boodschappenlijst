import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/groceries/Overview.vue')
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('@/views/groceries/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('@/views/groceries/Edit.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'active-link'
})

export default router;
