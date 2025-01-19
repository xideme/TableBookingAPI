const { db } = require('../db');
const Utils = require('./utils');
const tables = require('../models/Table');

exports.getAll = async (req, res) => {
    try {
        const tables = await db.Table.findAll({
            attributes: ['id', 'seats']
        });
        res.status(200).send(tables);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching tables' });
    }
};

exports.getById = async (req, res) => {
    try {
        const table = await db.Table.findByPk(req.params.id, {
            attributes: ['id', 'seats']
        });
        if (!table) {
            return res.status(404).send({ error: 'Table not found' });
        }
        res.send(table);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching the table' });
    }
};

exports.create = async (req, res) => {
    if (!req.body.seats) {
        return res.status(400).send({ error: 'Missing seats parameter' });
    }
    try {
        const newTable = {
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

exports.updateTable = async (req, res) => {
    const tableId = req.params.id;
    const { seats } = req.body;

    try {
        const table = await db.Table.findByPk(tableId);
        if (!table) {
            return res.status(404).send({ error: 'Table not found' });
        }

        table.seats = seats;

        await table.save();

        res.status(200).send(table);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while updating the table' });
    }
};

exports.deleteById = async (req, res) => {
    const tableId = req.params.id;
    try {
        
        await db.Reservation.destroy({
            where: { table_id: tableId }
        });

        
        const table = await db.Table.findByPk(tableId);
        if (!table) {
            return res.status(404).send({ error: 'Table not found' });
        }

        await table.destroy();

        return res.status(204).send({ message: 'Table deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while deleting the table' });
    }
};

const getTable = async (req, res) => {
    const idNumber = parseInt(req.params.id);
    if (isNaN(idNumber)) {
        res.status(400).send({ Error: `ID must be a whole number: ${idNumber}` });
        return null;
    }
    const table = await db.Table.findByPk(idNumber);
    if (!table) {
        res.status(404).send({ Error: `Table with this id not found: ${idNumber}` });
        return null;
    }
    return table;
}
