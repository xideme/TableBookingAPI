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