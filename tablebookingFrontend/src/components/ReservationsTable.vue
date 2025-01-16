<script>
export default {
    name: "ReservationsTable",
    props: {items:Array}
}
</script>

<template>
    <table class="table table-striped">
        <thead class="table-dark">
            <tr>
                <th>Client id</th>
                <th>Datetime</th>
                <th>Adult count</th>
                <th>Children count</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.client_id }}</td>
                <td>{{ item.datetime }}</td>
                <td>{{ item.adult_count }}</td>
                <td>{{ item.children_count }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>