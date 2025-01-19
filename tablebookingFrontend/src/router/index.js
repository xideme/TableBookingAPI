import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ClientsView from '@/views/client/ClientsView.vue';
import ReservationsView from '@/views/reservation/ReservationsView.vue';
import TablesView from '@/views/table/TablesView.vue';
import ClientsAdd from '@/views/client/ClientsAdd.vue';
import ReservationsAdd from '@/views/reservation/ReservationsAdd.vue';
import TablesAdd from '@/views/table/TablesAdd.vue';
import ClientsDetails from '@/views/client/ClientsDetails.vue';
import ClientsUpdate from '@/views/client/ClientsUpdate.vue';


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
        {   // Client Create (CREATE)
            path: '/clients/create',
            name: 'clients-create',
            component: ClientsAdd,
        },
        {   // Client Details (READ)
            path: '/clients/:id',
            name: 'clients-details',
            component: ClientsDetails,
        },
        {   // Client Update (UPDATE)
            path: '/clients/update/:id',
            name: 'clients-update',
            component: ClientsUpdate,
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