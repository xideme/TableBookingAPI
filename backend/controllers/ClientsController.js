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

exports.create =
async (req, res) => {
    if (!req.body.name || 
        !req.body.phone || 
        !req.body.email || 
        !req.body.bonus_level) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
const newClient = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    bonus_level: req.body.bonus_level
}
const createdClient = await db.clients.create(newClient);
    return res
    .status(201)
    .location(`${Utils.getBaseUrl(req)}/clients/${createdClient.id}`)
    .send(createdClient);
}

