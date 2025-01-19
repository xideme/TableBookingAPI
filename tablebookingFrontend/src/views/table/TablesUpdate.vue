<template>
    <div class="table-update" v-if="tableLoaded">
      <h1>Update Table: {{ table.id }}</h1>
      <form @submit.prevent="updateTable">
        <div>
          <label for="seats">Seats:</label>
          <input type="number" id="seats" v-model="table.seats" required />
        </div>
        <button type="submit">Update Table</button>
      </form>
      <router-link to="/tables">Back to Tables</router-link>
    </div>
    <div v-else>
      <p>Loading table details...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TableUpdate',
    data() {
      return {
        table: {},
        tableLoaded: false,
      };
    },
    created() {
      this.fetchTable();
    },
    methods: {
      async fetchTable() {
        const tableId = this.$route.params.id;
        try {
          const response = await fetch(`http://localhost:8080/tables/${tableId}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          this.table = data;
          this.tableLoaded = true;
        } catch (error) {
          console.error('An error occurred while fetching the table data:', error);
        }
      },
      async updateTable() {
        const tableId = this.$route.params.id;
        try {
          const response = await fetch(`http://localhost:8080/tables/${tableId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.table),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          alert('Table updated successfully!');
          this.$router.push('/tables');
        } catch (error) {
          alert('An error occurred while updating the table.');
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .table-update {
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