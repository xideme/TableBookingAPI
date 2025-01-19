<template>
    <div class="reservation-update" v-if="reservationLoaded">
      <h1>Update Reservation: {{ reservation.id }}</h1>
      <form @submit.prevent="updateReservation">
        <div>
          <label for="client_id">Client ID:</label>
          <input type="number" id="client_id" v-model="reservation.client_id" required />
        </div>
        <div>
          <label for="table_id">Table ID:</label>
          <input type="number" id="table_id" v-model="reservation.table_id" required />
        </div>
        <div>
          <label for="datetime">Datetime:</label>
          <input type="datetime-local" id="datetime" v-model="reservation.datetime" required />
        </div>
        <div>
          <label for="adult_count">Adult Count:</label>
          <input type="number" id="adult_count" v-model="reservation.adult_count" required />
        </div>
        <div>
          <label for="children_count">Children Count:</label>
          <input type="number" id="children_count" v-model="reservation.children_count" required />
        </div>
        <button type="submit">Update Reservation</button>
      </form>
      <router-link to="/reservations">Back to Reservations</router-link>
    </div>
    <div v-else>
      <p>Loading reservation details...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReservationsUpdate',
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
      async updateReservation() {
        const reservationId = this.$route.params.id;
        try {
          const response = await fetch(`http://localhost:8080/reservations/${reservationId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.reservation),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          alert('Reservation updated successfully!');
          this.$router.push('/reservations');
        } catch (error) {
          alert('An error occurred while updating the reservation.');
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .reservation-update {
    max-width: 600px;
    margin: auto;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  div {
    margin-bottom: 10px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    padding: 8px;
    font-size: 16px;
  }
  
  button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
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