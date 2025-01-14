const app = require('express')();
const port = 8080;
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../docs/swagger.json');
var express = require('express')

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

const reservations = [
    { id: 1, client_id: 1, datetime: "03-12-2024", adult_count: 2, children_count: 0 },
    { id: 2, client_id: 2, datetime: "04-12-2024", adult_count: 1, children_count: 1 },
    { id: 3, client_id: 3, datetime: "05-12-2024", adult_count: 3, children_count: 2 },
    { id: 4, client_id: 1, datetime: "06-12-2024", adult_count: 2, children_count: 0 },
    { id: 5, client_id: 4, datetime: "07-12-2024", adult_count: 2, children_count: 1 },
    { id: 6, client_id: 5, datetime: "08-12-2024", adult_count: 1, children_count: 0 },
    { id: 7, client_id: 6, datetime: "09-12-2024", adult_count: 4, children_count: 3 },
    { id: 8, client_id: 2, datetime: "10-12-2024", adult_count: 2, children_count: 2 },
    { id: 9, client_id: 3, datetime: "11-12-2024", adult_count: 1, children_count: 0 },
    { id: 10, client_id: 7, datetime: "12-12-2024", adult_count: 2, children_count: 1 }
];

const tables = [
    { id: 1, reservation_id: 3, seats: 4 },
    { id: 2, reservation_id: 2, seats: 4 },
    { id: 3, reservation_id: 1, seats: 6 },
    { id: 4, reservation_id: 7, seats: 4 },
    { id: 5, reservation_id: 6, seats: 4 },
    { id: 6, reservation_id: 8, seats: 2 },
    { id: 7, reservation_id: 9, seats: 8 },
    { id: 8, reservation_id: 4, seats: 6 },
    { id: 9, reservation_id: 5, seats: 2 },
    { id: 10, reservation_id: 10, seats: 4 }
];

app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

// clients <---start--->
app.get('/clients', (req, res) => {
    res.send(clients)
})

app.get('/clients/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).send({ error: "ID is missing or invalid" });
    }

    const client = clients.find(client => client.id === id);
    if (!client) {
        return res.status(404).send({ error: "Client not found" });
    }
    res.send(client);
});

app.post('/clients', (req,res) => {
    if (!req.body.name ||
        !req.body.phone ||
        !req.body.email ||
        !req.body.bonus_level)
        {
            return res.status(400).send
            ({error: 'One or multiple parameters are missing'});
        }
    
    let client = {
        id: clients.length +1,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        bonus_level: req.body.bonus_level
    }
    clients.push(client);
    res.status(201).location(`{$getBaseUrl(req)}/clients/${clients.length}`).send(client);
})
    
app.delete('/clients/:id', (req, res) => {
    if(typeof clients[req.params.id-1] === 'undefined') 
    {
        return res.status(404).send({Error: 'Client not found'});
    }
    clients.splice(req.params.id-1, 1);

    res.status(204).send({Error: 'No Content'});
    
})
   
// PUT /clients/:id - Update an existing client
app.put('/clients/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).send({ error: "ID is missing or invalid" });
    }

    const clientIndex = clients.findIndex(client => client.id === id);
    if (clientIndex === -1) {
        return res.status(404).send({ error: "Client not found" });
    }
    const { name, phone, email, bonus_level } = req.body;

    // Validate that at least one field is provided for updating
    if (!name && !phone && !email && !bonus_level) {
        return res.status(400).send({ error: "No fields provided for update" });
    }
    // Update the client's fields only if new values are provided
    if (name) clients[clientIndex].name = name;
    if (phone) clients[clientIndex].phone = phone;
    if (email) clients[clientIndex].email = email;
    if (bonus_level) clients[clientIndex].bonus_level = bonus_level;
    res.status(200).send(clients[clientIndex]);
});

// clients <---end--->

// reservations <---start--->
app.get('/reservations', (req, res) => {
    res.send(reservations);
});

app.get('/reservations/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).send({ error: "ID is missing or invalid" });
    }

    const reservation = reservations.find(reservation => reservation.id === id);
    if (!reservation) {
        return res.status(404).send({ error: "Reservation not found" });
    }
    res.send(reservation);
});

app.post('/reservations', (req, res) => {
    if (!req.body.client_id ||
        !req.body.datetime ||
        !req.body.adult_count ||
        !req.body.children_count)
        {
            return res.status(400).send
            ({error: 'One or multiple parameters are missing'});
        }

        let reservation = {
            id: reservations.length + 1,
            client_id: req.body.client_id,
            datetime: req.body.datetime,
            adult_count: req.body.adult_count,
            children_count: req.body.children_count
        };
        reservations.push(reservation);
        res.status(201).location(`{$getBaseUrl(req)}/reservations/${reservations.id}`).send(reservation);
    });


app.delete('/reservations/:id', (req, res) => {
    if(typeof reservations[req.params.id-1] === 'undefined') 
    {
        return res.status(404).send({Error: 'Reservation not found'});
    }

    reservations.splice(req.params.id-1, 1);
    res.status(204).send({Error: 'No Content'});
    
})


// PUT /reservations/:id - Update an existing reservation
app.put('/reservations/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).send({ error: "ID is missing or invalid" });
    }

    const reservationIndex = reservations.findIndex(reservation => reservation.id === id);
    if (reservationIndex === -1) {
        return res.status(404).send({ error: "Reservation not found" });
    }
    const { client_id, datetime, adult_count, children_count } = req.body;


    // Validate that at least one field is provided for updating
    if (!client_id && !datetime && !adult_count && !children_count) {
        return res.status(400).send({ error: "No fields provided for update" });
    }
    // Update the reservation fields only if new values are provided
    if (client_id) reservations[reservationIndex].client_id = client_id;
    if (datetime) reservations[reservationIndex].datetime = datetime;
    if (adult_count) reservations[reservationIndex].adult_count = adult_count;
    if (children_count) reservations[reservationIndex].children_count = children_count;
    res.status(200).send(reservations[reservationIndex]);
});
// reservations <---end--->

// Tables API
app.get('/tables', (req, res) => {
    res.send(tables);
});

app.get('/tables/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id))
    {
        return res.status(400).send({ error: "ID is missing or invalid" });
    }
    const table = tables.find(table => table.id === id);
    if (!table) {
        return res.status(404).send({ error: "Table not found" });
    }
    res.send(table);
});


app.post('/tables', (req, res) => {
    if (!req.body.reservation_id || !req.body.seats)
        {
            return res.status(400).send({ error: 'One or multiple parameters are missing' });
        } 

    let table = {
        id: tables.length + 1,
        reservation_id: req.body.reservation_id,
        seats: req.body.seats
    };
    tables.push(table);
    res.status(201).location(`/${getBaseUrl(req)}/tables/${table.id}`).send(table);
});

app.delete('/tables/:id', (req, res) => {
    const tableIndex = tables.findIndex(table => table.id == req.params.id);



app.listen(port, () => {console.log
(`Backend api address: http://localhost:${port}`);});

function getBaseUrl(req) {
    return req.connection && req.connection.encrypted ? "https" : "http" + `://${req.headers.host}`;
}