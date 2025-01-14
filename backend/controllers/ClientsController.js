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
    const client = await getClient(req, res);
    if (!client) { return res.status(404).send({Error: 'Client not found'});}
    res.send(client);
}