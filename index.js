const app = require('express')();
const port = 8080;

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');

app.get('/clients', (req, res) => {
    res.send(["Nikita Pupkin", "Mart Mets"])
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {console.log
(`Backend api address: http://localhost:${port}`);});