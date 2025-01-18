<script>
import ClientsTable from '../components/ClientsTable.vue';

export default {
    name: "ClientsView",
    components: { ClientsTable },
    data() {
        return {
            allClients: [] // Array to hold the client data
        };
    },
    async created() {
        try {
            // Fetch client data from the backend API
            const response = await fetch('http://localhost:8080/clients');
            if (!response.ok) {
                throw new Error(`Error fetching clients: ${response.statusText}`);
            }
            this.allClients = await response.json();
        } catch (error) {
            console.error("Failed to fetch clients:", error);
            alert("An error occurred while fetching clients.");
        }
    }
};
</script>

<template>
    <main>
        <router-link to="/clients/create" class="btn">Add New Client</router-link>
        <ClientsTable :items="allClients" />
    </main>
</template>

<style scoped>
.btn {
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #1eff56;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
