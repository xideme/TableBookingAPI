import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ClientsView from '@/views/client/ClientsView.vue';
import ReservationsView from '@/views/reservation/ReservationsView.vue';
import TablesView from '@/views/table/TablesView.vue';
import ClientsAdd from '@/views/client/ClientsAdd.vue';
import ReservationsAdd from '@/views/reservation/ReservationsAdd.vue';
import TablesAdd from '@/views/table/TablesAdd.vue';


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
            path: '/clients/create',
            name: 'clients-create',
            component: ClientsAdd,
        },
        

        {
            path: '/reservations',
            name: 'reservations',
            component: ReservationsView,
        },
        {
            path: '/reservations/create',
            name: 'reservations-create',
            component: ReservationsAdd,
        },

        {
            path: '/tables',
            name: 'tables',
            component: TablesView,
        },
        {
            path: '/tables/create',
            name: 'tables-create',
            component: TablesAdd,
        },
    ]
})

export default router