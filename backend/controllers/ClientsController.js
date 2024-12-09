const {db} = require('../db');
const Utils = require('./utils');

exports.getAll = 
async (req, res) => {
    res
    .status(200)
    .send(clients
        .map(({id, name}) => {return id, name}));
}

exports.getById = 
async (req, res) => {
    const game = await getGame(req, res);
    if (!game) {return res.status(400).send({ error: "ID is missing or invalid" });}
    res.send(game);

    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        
    }

    const client = clients.find(client => client.id === id);

    if (!client) {
        return res.status(404).send({ error: "Client not found" });
    }

    res.send(client);
};

const getClient = 
async (req, res) => 

