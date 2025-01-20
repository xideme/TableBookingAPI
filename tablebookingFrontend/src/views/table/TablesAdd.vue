<template>
  <div class="add-table-form">
    <h1>Add a New Table</h1>
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
        seats: 0, 
      },
    };
  },
  methods: {
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