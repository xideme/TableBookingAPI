<script >
import ClientsTable from '@/components/ClientsTable.vue';
export default {
  components: { ClientsTable },
  data() {
    return {
      allClients: []
    }
  },
  async created() {
    this.allClients = await (await fetch('http://localhost:8080/clients')).json()
  }
}
</script>

<template>
  <div>
    <ClientsTable :items="allClients"  />
  </div>
</template>