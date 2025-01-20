<template>
  <div class="add-reservation-form">
    <h1>Add a New Reservation</h1>
    <div class="form-group">
      <label for="client-id">Client:</label>
      <select v-model="reservation.client_id" id="client-id">
        <option v-for="client in clients" :key="client.id" :value="client.id">
          {{ client.name }} (ID: {{ client.id }})
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="table-id">Table:</label>
      <select v-model="reservation.table_id" id="table-id">
        <option v-for="table in tables" :key="table.id" :value="table.id">
          Table {{ table.id }} - Seats: {{ table.seats }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="datetime">Date and Time:</label>
      <input v-model="reservation.datetime" id="datetime" type="datetime-local" placeholder="Select date and time" />
    </div>
    <div class="form-group">
      <label for="adult-count">Number of Adults:</label>
      <input v-model="reservation.adult_count" id="adult-count" type="number" placeholder="Enter number of adults" />
    </div>
    <div class="form-group">
      <label for="children-count">Number of Children:</label>
      <input v-model="reservation.children_count" id="children-count" type="number" placeholder="Enter number of children" />
    </div>
    <button class="submitBtn" @click="submitReservation">Submit</button>
    <router-link to="/reservations">Back to Reservations</router-link>
  </div>
</template>
<script>
export default {
  name: "ReservationsAdd",
  data() {
    return {
      reservation: {
        client_id: null,
        table_id: null, // Added table_id
        datetime: "",
        adult_count: 0,
        children_count: null,
      },
      clients: [], // List of clients
      tables: [], // List of available tables
    };
  },
  created() {
    this.fetchClients();
    this.fetchTables();
  },
  methods: {
    // Fetch clients for the reservation form
    async fetchClients() {
      try {
        const response = await fetch("http://localhost:8080/clients");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.clients = data;
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    },
    // Fetch available tables for the reservation form
    async fetchTables() {
      try {
        const response = await fetch("http://localhost:8080/tables");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.tables = data;
      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    },
    // Submit the reservation data to the backend
    async submitReservation() {
      try {
        const response = await fetch("http://localhost:8080/reservations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.reservation),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Reservation added successfully:", data);
        this.$router.push("/reservations");
      } catch (error) {
        console.error("Error submitting reservation:", error);
      }
    },
  },
};
</script>