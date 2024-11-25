const app = require('express')();
const port = 8080;

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');

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