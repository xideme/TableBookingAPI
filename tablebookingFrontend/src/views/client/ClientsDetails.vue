<template>
    <div class="client-details" v-if="clientLoaded">
      <h1>Client Details: {{ client.name }}</h1>
      <p><strong>ID:</strong> {{ client.id }}</p>
      <p><strong>Phone:</strong> {{ client.phone }}</p>
      <p><strong>Email:</strong> {{ client.email }}</p>
      <p><strong>Bonus Level:</strong> {{ client.bonus_level }}</p>
      <p><strong>Created At:</strong> {{ formatDate(client.createdAt) }}</p>
      <p><strong>Updated At:</strong> {{ formatDate(client.updatedAt) }}</p>
      <router-link to="/clients">Back to Clients</router-link>
    </div>
    <div v-else>
      <p>Loading client details...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClientDetail',
    data() {
      return {
        client: {},
        clientLoaded: false,
      };
    },
    created() {
      this.fetchClient();
    },
    methods: {
      async fetchClient() {
        const clientId = this.$route.params.id;
        try {
          const response = await fetch(`http://localhost:8080/clients/${clientId}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          this.client = data;
          this.clientLoaded = true;
        } catch (error) {
          console.error('An error occurred while fetching the client data:', error);
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
  .client-details {
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