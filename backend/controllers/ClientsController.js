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

exports.editById = 
async (req, res) => {
    const client = await getClient(req, res);
    if (!client) {return}
    if (!req.body.name || 
        !req.body.phone || 
        !req.body.email || 
        !req.body.bonus_level) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
    client.name = req.body.name;
    client.phone = req.body.phone;
    client.email = req.body.email;
    client.bonus_level = req.body.bonus_level;
    await client.save();
    return res
    .location(`${Utils.getBaseUrl(req)}/clients/${client.id}`)
    .send(client);
}

exports.deleteById = 
async (req, res) => {
    const client = await getClient(req, res);
    if(!client) {return}
    await client.destroy();
    res.status(204).send({Error: 'No Content'});
}

const getClient = 
async (req, res) => {
    const idNumber = parseInt(req.params.id);
    if(isNaN(idNumber)) {
        res.status(400).send({Error: `ID must be a whole number: ${idNumber}`});
        return null;
    }
    const client = await db.clients.findByPk(idNumber);
    if(!client) {
        res.status(404).send({Error: `client with this id not found: ${idNumber}`});
        return null;
    }
    return client;
}