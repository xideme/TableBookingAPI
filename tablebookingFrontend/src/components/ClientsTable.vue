<script>
export default {
    name: "ClientsTable",
    props: {
        items: Array
    }
}
</script>

<template>    
    <body>
        <table class="client-table">
            <thead class="client-thead">
                <tr>
                <th>Client Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Bonus Level</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.bonus_level }}</td>
                    <td></td>
                </tr>
            </tbody>
            
        </table>
    </body>
</template>

<style scoped>
.client-thead {
    background-color: #9bf7c1;
    color: #212926;
    font-weight: bold;
}

.client-table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212926;
    border-collapse: collapse;
    border: 1px solid #000000;
    background-color: #f9f9f9;
    font-family: 'Monaco', monospace;
}

.client-table th,
.client-table td {
  padding: 12px 15px;
  text-align: left;
  border: 2px solid #000000;
}
</style>