const app = require('express')();
const port = 8080;

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');

const clients =
[
    {id: 1, name: "Mihhail Bajandin", phone: "+3725555555", email: "misha228@hz.ee", bonus_level: "5"},
    {id: 2, name: "Misa Bagadin", phone: "+3725527555", email: "faszz@hz.ee", bonus_level: "3"}
]

app.get('/clients', (req, res) => {
    res.send(["Nikita Pupkin", "Mart Mets"])
})

app.get('/clients', (req, res) => {
    res.send(clients)
})

app.get('/clients/:id', (req, res) => {

    if(typeof clients[req.params.id - 1] == 'undefined')
    {
        return res.status(404).send({error: "Client not found"})
    }

    res.send(clients[req.params.id - 1])
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {console.log
(`Backend api address: http://localhost:${port}`);});