<script>
import ReservationsTable from '../../components/ReservationsTable.vue';
export default{
    name: "ReservationsView",
    components: { ReservationsTable },
    data() {
        return {
            allReservations: []
        }
    },
    async created() {
        this.allReservations = await (await fetch('http://localhost:8080/reservations')).json();
    }
}
</script>

<template>
    <main>
        <router-link to="/reservations/create" class="btn">Add New Reservation</router-link>
        <ReservationsTable :items=allReservations />
    </main>
</template>

<style scoped>

</style>