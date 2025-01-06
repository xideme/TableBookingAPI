const {db} = require('../db');
const tables = require('../models/tables');
const Utils = require('./utils');

exports.getAll =
async (req, res) => {
    res
    .status(200)
    .send(tables
        .map(({id, reservation_id}) => {return id, reservation_id}));
}

exports.getById =
async (req, res) => {
    const table = await getTable(req, res);
    if (!table) { return res.status(404).send({Error: 'Table not found'});}
    res.send(table);
}

exports.create =
async (req, res) => {
    if (!req.body.reservation_id || 
        !req.body.seats) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
const newTable = {
    reservation_id: req.body.reservation_id,
    seats: req.body.seats
}
const createdTable = await db.tables.create(newTable);
    return res
    .status(201)
    .location(`${Utils.getBaseUrl(req)}/tables/${createdTable.id}`)
    .send(createdTable);
}

exports.editById = 
async (req, res) => {
    const table = await getTable(req, res);
    if (!table) {return}
    if (!req.body.reservation_id || 
        !req.body.seats) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
    table.reservation_id = req.body.reservation_id;
    table.seats = req.body.seats;
    await table.save();
    return res
    .location(`${Utils.getBaseUrl(req)}/tables/${table.id}`)
    .send(table);
}

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
    const table = await db.tables.findByPk(idNumber);
    if(!table) {
        res.status(404).send({Error: `table with this id not found: ${idNumber}`});
        return null;
    }
    return table;
}