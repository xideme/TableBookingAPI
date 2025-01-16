import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ClientsView from '@/views/ClientsView.vue';
import ReservationsView from '@/views/ReservationsView.vue';
import TablesView from '@/views/TablesView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/clients',
            name: 'clients',
            component: ClientsView,
        },
        {
            path: '/reservations',
            name: 'reservations',
            component: ReservationsView,
        },
        {
            path: '/tables',
            name: 'tables',
            component: TablesView,
        },
    ]
})

export default router