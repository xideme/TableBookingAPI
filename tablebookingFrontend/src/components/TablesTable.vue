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
                <th>name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}{{ item.reservation_id }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>