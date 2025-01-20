<template>
  <div class="add-client-form">
    <h1>Add a New Client</h1>
    <div class="form-group">
      <label for="name">Name:</label>
      <input v-model="client.name" id="name" type="text" placeholder="Enter client name" />
    </div>
    <div class="form-group">
      <label for="phone">Phone:</label>
      <input v-model="client.phone" id="phone" type="text" placeholder="Enter phone number" />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input v-model="client.email" id="email" type="email" placeholder="Enter email address" />
    </div>
    <div class="form-group">
      <label for="bonus-level">Bonus Level:</label>
      <input v-model="client.bonus_level" id="bonus-level" type="number" placeholder="Enter bonus level" />
    </div>
    <button class="submitBtn" @click="submitClient">Submit</button>
    <router-link to="/clients">Back to Clients</router-link>
  </div>
</template>
<script>
export default {
  name: "ClientsAdd",
  data() {
    return {
      client: {
        name: "",
        phone: "",
        email: "",
        bonus_level: 0,
      },
    };
  },
  methods: {
    async submitClient() {
      try {
        const response = await fetch("http://localhost:8080/clients", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.client),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Client added successfully:", data);
        this.$router.push("/clients");
      } catch (error) {
        console.error("Error submitting client:", error);
      }
    },
  },
};
</script>