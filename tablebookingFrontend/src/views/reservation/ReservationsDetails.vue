<template>
  <div class="reservation-details" v-if="reservationLoaded">
    <h1>Reservation Details: {{ reservation.id }}</h1>
    <p><strong>ID:</strong> {{ reservation.id }}</p>
    <p><strong>Client ID:</strong> {{ reservation.client_id }}</p>
    <p><strong>Table ID:</strong> {{ reservation.table_id }}</p>
    <p><strong>Datetime:</strong> {{ formatDate(reservation.datetime) }}</p>
    <p><strong>Adult Count:</strong> {{ reservation.adult_count }}</p>
    <p><strong>Children Count:</strong> {{ reservation.children_count }}</p>
    <router-link to="/reservations">Back to Reservations</router-link>
  </div>
  <div v-else>
    <p>Loading reservation details...</p>
  </div>
</template>

<script>
export default {
  name: 'ReservationDetails',
  data() {
    return {
      reservation: {},
      reservationLoaded: false,
    };
  },
  created() {
    this.fetchReservation();
  },
  methods: {
    async fetchReservation() {
      const reservationId = this.$route.params.id;
      try {
        const response = await fetch(`http://localhost:8080/reservations/${reservationId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.reservation = data;
        this.reservationLoaded = true;
      } catch (error) {
        console.error('An error occurred while fetching the reservation data:', error);
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(date).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.reservation-details {
  max-width: 600px;
  margin: auto;
}

h1 {
  margin-bottom: 20px;
}

p {
  margin: 10px 0;
}

router-link {
  display: block;
  margin-top: 20px;
  color: #42b983;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>