<script>
export default {
    name: "TablesTable",
    props: {items:Array},
    methods: {
    async deleteTable(tableID) {
      const confirmation = confirm("Are you sure you want to delete this table?");
      if (!confirmation) return;

      try {
        const response = await fetch(`http://localhost:8080/tables/${tableID}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`Failed to delete table. Status: ${response.status}`);
        }

        const index = this.items.findIndex(table => table.id === tableID);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
        alert("Table deleted successfully.");
      } catch (error) {
        console.error("Error deleting table:", error);
        alert("Failed to delete the table. Please try again.");
      }
    }
  }
};

</script>

<template>
    <table class="table-table">
        <thead class="table-thead">
            <tr>
                <th>ID</th>
                <th>Seats</th>
                <th>Action buttons</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.seats }}</td>
                <td>
                    <router-link :to="`/tables/${item.id}`" class="btn">
                       Details
                    </router-link>
                    <router-link :to="`/tables/update/${item.id}`" class="btn">
                        Update
                     </router-link>
                    <button @click="deleteTable(item.id)" class="btn">
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.table-thead {
    background-color: #9bf7c1;
    color: #212926;
    font-weight: bold;
}

.table-table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212926;
    border-collapse: collapse;
    border: 1px solid #000000;
    background-color: #f9f9f9;
    font-family: 'Monaco', monospace; 
}

.table-table th,
.table-table td {
  padding: 12px 15px;
  text-align: left;
  border: 2px solid #000000;
}
</style>