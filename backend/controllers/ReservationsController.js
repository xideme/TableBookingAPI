const {db} = require('../db');
const Utils = require('./utils');

exports.getAll =
async (req, res) => {
    res
    .status(200)
    .send(reservations
        .map(({id, client_id}) => {return id, client_id}));
}

exports.getById =
async (req, res) => {
    const reservation = await getReservation(req, res);
    if (!reservation) { return res.status(404).send({Error: 'Reservation not found'});}
    res.send(reservation);
}
