export default {
    template: `
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
            <th>Name</th>
            <th>{{clientInModal.phone}}</th>
        </tr>
        <tr>
            <th>Name</th>
            <th>{{clientInModal.email}}</th>
        </tr>
        <tr>
            <th>Name</th>
            <th>{{clientInModal.bonus_level}}</th>
        </tr>
    </table>
    `,
    props: ["clientInModal"]
}