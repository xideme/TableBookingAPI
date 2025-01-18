const {db} = require('../db');
const tables = require('../models/Table');
const Utils = require('./utils');

exports.getAll = async (req, res) => {
    try {
        const tables = await db.Table.findAll({
            attributes: ['id', 'reservation_id', 'seats']
        });
        res.status(200).send(tables);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching tables' });
    }
};

exports.getById = async (req, res) => {
    try {
        const table = await db.Table.findByPk(req.params.id);
        if (!table) {
            return res.status(404).send({ error: 'Table not found' });
        }
        res.send(table);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching the table' });
    }
};

exports.create = async (req, res) => {
    if (!req.body.reservation_id || !req.body.seats) {
        return res.status(400).send({ error: 'Missing one or all parameters' });
    }
    try {
        const newTable = {
            reservation_id: req.body.reservation_id,
            seats: req.body.seats
        };
        const createdTable = await db.Table.create(newTable);
        return res
            .status(201)
            .location(`${Utils.getBaseUrl(req)}/tables/${createdTable.id}`)
            .send(createdTable);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while creating the table' });
    }
};

exports.editById = async (req, res) => {
    try {
        const table = await db.Table.findByPk(req.params.id);
        if (!table) {
            return res.status(404).send({ error: 'Table not found' });
        }

        if (!req.body.reservation_id || !req.body.seats) {
            return res.status(400).send({ error: 'Missing one or all parameters' });
        }

        table.reservation_id = req.body.reservation_id;
        table.seats = req.body.seats;

        await table.save();

        return res
            .status(200)
            .location(`${Utils.getBaseUrl(req)}/tables/${table.id}`)
            .send(table);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while updating the table' });
    }
};

exports.deleteById = 
async (req, res) => {
    const table = await getTable(req, res);
    if(!table) {return}
    await table.destroy();
    res.status(204).send({Error: 'No Content'});
}

const getTable = 
async (req, res) => {
    const idNumber = parseInt(req.params.id);
    if(isNaN(idNumber)) {
        res.status(400).send({Error: `ID must be a whole number: ${idNumber}`});
        return null;
    }
    const table = await db.Table.findByPk(idNumber);
    if(!table) {
        res.status(404).send({Error: `table with this id not found: ${idNumber}`});
        return null;
    }
    return table;
}