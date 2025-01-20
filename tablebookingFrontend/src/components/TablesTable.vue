<script>
export default {
    name: "TablesTable",
    props: {items:Array},
    
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