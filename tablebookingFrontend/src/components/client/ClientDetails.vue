<script>
export default {
    
    props: ["clientInModal"]
}
</script>

<template>
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <th>{{clientInModal.id}}</th>
        </tr>
        <tr>
            <th>Name</th>
            <th>{{clientInModal.name}}</th>
        </tr>
        <tr>
            <th>Phone</th>
            <th>{{clientInModal.phone}}</th>
        </tr>
        <tr>
            <th>Email</th>
            <th>{{clientInModal.email}}</th>
        </tr>
        <tr>
            <th>Bonus level</th>
            <th>{{clientInModal.bonus_level}}</th>
        </tr>
    </table>
</template>