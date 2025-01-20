<template>
  <div class="table-details" v-if="tableLoaded">
    <h1>Table Details: {{ table.id }}</h1>
    <p><strong>ID:</strong> {{ table.id }}</p>
    <p><strong>Seats:</strong> {{ table.seats }}</p>
    <router-link to="/tables">Back to Tables</router-link>
  </div>
  <div v-else>
    <p>Loading table details...</p>
  </div>
</template>

<script>
export default {
  name: 'TableDetails',
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
    }
  }
};
</script>

<style scoped>
.table-details {
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