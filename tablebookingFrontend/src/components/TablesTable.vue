<script>
export default {
    name: "TablesTable",
    props: {items:Array}
}
</script>

<template>
    <table class="table table-striped">
        <thead class="table-dark">
            <tr>
                <th>reservation_id</th>
                <th>seats</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.reservation_id }}</td>
                <td>{{ item.seats }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>