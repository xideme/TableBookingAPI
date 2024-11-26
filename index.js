const app = require('express')();
const port = 8080;

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');

const clients = [
    { id: 1, name: "Mihhail Bajandin", phone: "+3725555555", email: "misha228@hz.ee", bonus_level: "5" },
    { id: 2, name: "Misa Bagadin", phone: "+3725527555", email: "faszz@hz.ee", bonus_level: "3" },
    { id: 3, name: "Karl Vahtra", phone: "+37253123456", email: "karl.vahtra@ee.ee", bonus_level: "4" },
    { id: 4, name: "Marina Tamm", phone: "+37252123456", email: "marina.tamm@ee.ee", bonus_level: "2" },
    { id: 5, name: "Kristjan Kask", phone: "+37254123456", email: "kristjan.kask@ee.ee", bonus_level: "1" },
    { id: 6, name: "Liis Oja", phone: "+37256123456", email: "liis.oja@ee.ee", bonus_level: "3" },
    { id: 7, name: "Andres Mägi", phone: "+37257123456", email: "andres.magi@ee.ee", bonus_level: "4" },
    { id: 8, name: "Eveli Kallas", phone: "+37258123456", email: "eveli.kallas@ee.ee", bonus_level: "5" },
    { id: 9, name: "Arno Laane", phone: "+37259123456", email: "arno.laane@ee.ee", bonus_level: "2" },
    { id: 10, name: "Tiina Kuusk", phone: "+37260123456", email: "tiina.kuusk@ee.ee", bonus_level: "1" },
    { id: 11, name: "Jaan Saar", phone: "+37261123456", email: "jaan.saar@ee.ee", bonus_level: "3" },
    { id: 12, name: "Maarika Lind", phone: "+37262123456", email: "maarika.lind@ee.ee", bonus_level: "4" },
    { id: 13, name: "Oliver Hallik", phone: "+37263123456", email: "oliver.hallik@ee.ee", bonus_level: "5" },
    { id: 14, name: "Merike Rand", phone: "+37264123456", email: "merike.rand@ee.ee", bonus_level: "2" },
    { id: 15, name: "Peeter Kõiv", phone: "+37265123456", email: "peeter.koiv@ee.ee", bonus_level: "1" },
    { id: 16, name: "Laura Vaher", phone: "+37266123456", email: "laura.vaher@ee.ee", bonus_level: "3" },
    { id: 17, name: "Raivo Põder", phone: "+37267123456", email: "raivo.poder@ee.ee", bonus_level: "4" },
    { id: 18, name: "Helena Laanemets", phone: "+37268123456", email: "helena.laanemets@ee.ee", bonus_level: "5" },
    { id: 19, name: "Tarmo Vokk", phone: "+37269123456", email: "tarmo.vokk@ee.ee", bonus_level: "2" },
    { id: 20, name: "Kristi Talve", phone: "+37270123456", email: "kristi.talve@ee.ee", bonus_level: "1" }
];

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