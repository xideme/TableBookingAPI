const { db } = require('../db');
const Utils = require('./utils');

exports.getAll = async (req, res) => {
    try {
        const clients = await db.Client.findAll({
            attributes: ['id', 'name', 'phone', 'email', 'bonus_level']
        });
        res.status(200).send(clients);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching clients' });
    }
};

exports.getById = async (req, res) => {
    try {
        const client = await db.Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).send({ error: 'Client not found' });
        }
        res.send(client);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching the client' });
    }
};

exports.create = async (req, res) => {
    if (!req.body.name || !req.body.phone || !req.body.email || !req.body.bonus_level) {
        return res.status(400).send({ error: 'Missing one or all parameters' });
    }
    try {
        const newClient = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            bonus_level: req.body.bonus_level
        };
        const createdClient = await db.Client.create(newClient);
        return res
            .status(201)
            .location(`${Utils.getBaseUrl(req)}/clients/${createdClient.id}`)
            .send(createdClient);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while creating the client' });
    }
};

exports.updateClient = async (req, res) => {
    const clientId = req.params.id;
    const { name, phone, email, bonus_level } = req.body;

    try {
        const client = await db.Client.findByPk(clientId);
        if (!client) {
            return res.status(404).send({ error: 'Client not found' });
        }

        client.name = name;
        client.phone = phone;
        client.email = email;
        client.bonus_level = bonus_level;

        await client.save();

        res.status(200).send(client);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while updating the client' });
    }
};


exports.deleteById = async (req, res) => {
    const clientId = req.params.id;
    try {
        // Delete related reservations first
        await db.Reservation.destroy({
            where: { client_id: clientId }
        });

        // Then delete the client
        const client = await db.Client.findByPk(clientId);
        if (!client) {
            return res.status(404).send({ error: 'Client not found' });
        }

        await client.destroy();

        return res.status(200).send({ message: 'Client deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while deleting the client' });
    }
};

const getClient = 
async (req, res) => {
    const idNumber = parseInt(req.params.id);
    if(isNaN(idNumber)) {
        res.status(400).send({Error: `ID must be a whole number: ${idNumber}`});
        return null;
    }
    const client = await db.Client.findByPk(idNumber);
    if(!client) {
        res.status(404).send({Error: `client with this id not found: ${idNumber}`});
        return null;
    }
    return client;
}