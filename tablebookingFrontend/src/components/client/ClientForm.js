export default {
    template: `
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <th>{{id}}</th>
        </tr>
        <tr>
            <th>Name</th>
            <th><input :value="name" @input="$emit('update:name', $event.target.value)"/></th>
        </tr>
        <tr>
            <th>phone</th>
            <th><input :value="phone" @input="$emit('update:phone', $event.target.value)"/></th>
        </tr>
        <tr>
            <th>email</th>
            <th><input :value="email" @input="$emit('update:email', $event.target.value)"/></th>
        </tr>
        <tr>
            <th>bonus_level</th>
            <th><input :value="bonus_level" @input="$emit('update:bonus_level', $event.target.value)"/></th>
        </tr>
    </table>
    `,
    props: ["id", "name", "phone", "email", "bonus_level"],
    emits: ["update:name", "update:phone", "update:email", "update:bonus_level"]
}