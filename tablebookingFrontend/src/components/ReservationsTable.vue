<script>
export default {
    name: "ReservationsTable",
    props: {items:Array},
    methods: {
    async deleteReservation(reservationID) {
      const confirmation = confirm("Are you sure you want to delete this reservation?");
      if (!confirmation) return;
      try {
        const response = await fetch(`http://localhost:8080/reservations/${reservationID}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`Failed to delete reservation. Status: ${response.status}`);
        }
        const index = this.items.findIndex(reservation => reservation.id === reservationID);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
        alert("Reservation deleted successfully.");
      } catch (error) {
        console.error("Error deleting reservation:", error);
        alert("Failed to delete the reservation. Please try again.");
      }
    }
  }
}
</script>
<template>
    <table class="reservation-table">
        <thead class="reservation-thead">
            <tr>
                <th>ID</th>
                <th>Client_ID</th>
                <th>Table_ID</th>
                <th>Datetime</th>
                <th>Adult count</th>
                <th>Children count</th>
                <th>Action buttons</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.client_id }}</td>
                <td>{{ item.table_id }}</td>
                <td>{{ item.datetime }}</td>
                <td>{{ item.adult_count }}</td>
                <td>{{ item.children_count }}</td>
                <td>
                    <router-link :to="`/reservations/${item.id}`" class="btn">
                       Details
                    </router-link>
                    <router-link :to="`/reservations/update/${item.id}`" class="btn">
                        Update
                     </router-link>
                    <button @click="deleteReservation(item.id)" class="btn">
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
.reservation-thead {
    background-color: #9bf7c1;
    color: #212926;
    font-weight: bold;
}
.reservation-table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212926;
    border-collapse: collapse;
    border: 1px solid #000000;
    background-color: #f9f9f9;
    font-family: 'Monaco', monospace; 
}
.reservation-table th,
.reservation-table td {
  padding: 12px 15px;
  text-align: left;
  border: 2px solid #000000;
}
</style>