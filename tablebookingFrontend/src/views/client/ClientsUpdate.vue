<template>
  <div class="client-update" v-if="clientLoaded">
    <h1>Update Client: {{ client.name }}</h1>
    <form @submit.prevent="updateClient">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="client.name" required />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="client.phone" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="client.email" required />
      </div>
      <div>
        <label for="bonus_level">Bonus Level:</label>
        <input type="number" id="bonus_level" v-model="client.bonus_level" required />
      </div>
      <button type="submit">Update Client</button>
    </form>
    <router-link to="/clients">Back to Clients</router-link>
  </div>
  <div v-else>
    <p>Loading client details...</p>
  </div>
</template>

<script>
export default {
  name: 'ClientUpdate',
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
    async updateClient() {
      const clientId = this.$route.params.id;
      try {
        const response = await fetch(`http://localhost:8080/clients/${clientId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.client),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        alert('Client updated successfully!');
        this.$router.push('/clients');
      } catch (error) {
        alert('An error occurred while updating the client.');
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.client-update {
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