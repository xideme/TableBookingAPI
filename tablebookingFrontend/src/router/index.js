import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ClientsView from '@/views/client/ClientsView.vue';
import ClientsAdd from '@/views/client/ClientsAdd.vue';
import ClientsDetails from '@/views/client/ClientsDetails.vue';
import ClientsUpdate from '@/views/client/ClientsUpdate.vue';
import TablesView from '@/views/table/TablesView.vue';
import TablesAdd from '@/views/table/TablesAdd.vue';
import TablesDetails from '@/views/table/TablesDetails.vue';
import ReservationsView from '@/views/reservation/ReservationsView.vue';
import ReservationsAdd from '@/views/reservation/ReservationsAdd.vue';
import ReservationsDetails from '@/views/reservation/ReservationsDetails.vue';
import ReservationsUpdate from '@/views/reservation/ReservationsUpdate.vue';

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
            path: '/tables',
            name: 'tables',
            component: TablesView,
        },
        { // Table Create (CREATE)
            path: '/tables/create',
            name: 'tables-create',
            component: TablesAdd,
        },
        { // Table Details (READ)
            path: '/tables/:id',
            name: 'tables-details',
            component: TablesDetails,
        },
        { // Table Update (UPDATE)
            path: '/tables/update/:id',
            name: 'tables-update',
            component: TablesUpdate,
        },

        {
            path: '/reservations',
            name: 'reservations',
            component: ReservationsView,
        },
        {  // Reservation Create (CREATE)
            path: '/reservations/create',
            name: 'reservations-create',
            component: ReservationsAdd,
        },
        {  // Reservation Details (READ)
            path: '/reservations/:id',
            name: 'reservations-details',
            component: ReservationsDetails,
        },
        { // Reservation Update (UPDATE)
            path: '/reservations/update/:id',
            name: 'reservations-update',
            component: ReservationsUpdate,
        },
        
    ]
})

export default router