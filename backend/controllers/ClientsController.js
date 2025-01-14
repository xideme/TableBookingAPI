const {db} = require('../db');
const Utils = require('./utils');

exports.getAll =
async (req, res) => {
    res
    .status(200)
    .send(clients
        .map(({id, name}) => {return id, name}));
}