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