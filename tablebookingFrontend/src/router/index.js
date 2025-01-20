import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ReservationsView from '@/views/reservation/ReservationsView.vue';
import TablesView from '@/views/table/TablesView.vue';
import ReservationsAdd from '@/views/reservation/ReservationsAdd.vue';
import TablesAdd from '@/views/table/TablesAdd.vue';
import TablesDetails from '@/views/table/TablesDetails.vue';
import TablesUpdate from '@/views/table/TablesUpdate.vue';
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
    ]
})

export default router