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
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                <th>Client Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Bonus Level</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.bonus_level }}</td>
                </tr>
            </tbody>
            
        </table>
    </body>
</template>

<style scoped>
</style>