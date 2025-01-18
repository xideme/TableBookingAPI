<script>
import TablesTable from '../components/TablesTable.vue';
export default{
    name: "TablesView",
    components: { TablesTable },
    data() {
        return {
            allTables: []
        }
    },
    async created() {
        this.allTables = await (await fetch('http://localhost:8080/tables')).json();
    }
}
</script>

<template>
    <main>
        <router-link to="/tables/create" class="btn">Add New Table</router-link>
        <TablesTable :items=allTables />
    </main>
</template>

<style scoped></style>