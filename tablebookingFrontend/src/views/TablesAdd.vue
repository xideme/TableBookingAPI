<template>
    <div class="add-table-form">
      <h1>Add a New Table</h1>
      <div class="form-group">
        <label for="reservation-id">Reservation:</label>
        <select v-model="table.reservation_id" id="reservation-id">
          <option v-for="reservation in reservations" :key="reservation.id" :value="reservation.id">
            {{ reservation.id }} - {{ reservation.datetime }}
          </option>
        </select>
      </div>
  
      <div class="form-group">
        <label for="seats">Number of Seats:</label>
        <input v-model="table.seats" id="seats" type="number" placeholder="Enter number of seats" />
      </div>
  
      <button class="submitBtn" @click="submitTable">Submit</button>
      <router-link to="/tables">Back to Tables</router-link>
    </div>
  </template>

<script>
export default {
  name: "TablesAdd",
  data() {
    return {
      table: {
        reservation_id: null,
        seats: 0,
      },
      reservations: [], // To store available reservations
    };
  },
  created() {
    this.fetchReservations();
  },
  methods: {
    async fetchReservations() {
      try {
        const response = await fetch("http://localhost:8080/reservations");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.reservations = data;
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    },
    async submitTable() {
      try {
        const response = await fetch("http://localhost:8080/tables", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.table),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Table added successfully:", data);
        this.$router.push("/tables");
      } catch (error) {
        console.error("Error submitting table:", error);
      }
    },
  },
};
</script>
