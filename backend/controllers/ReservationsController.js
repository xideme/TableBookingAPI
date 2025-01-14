const {db} = require('../db');
const Utils = require('./utils');

exports.getAll =
async (req, res) => {
    res
    .status(200)
    .send(reservations
        .map(({id, client_id}) => {return id, client_id}));
}
