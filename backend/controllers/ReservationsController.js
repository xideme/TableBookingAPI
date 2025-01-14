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

exports.create =
async (req, res) => {
    if (!req.body.client_id || 
        !req.body.datetime || 
        !req.body.adult_count || 
        !req.body.children_count) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
const newReservation = {
    client_id: req.body.client_id,
    datetime: req.body.datetime,
    adult_count: req.body.adult_count,
    children_count: req.body.children_count
}
const createdReservation = await db.reservations.create(newReservation);
    return res
    .status(201)
    .location(`${Utils.getBaseUrl(req)}/reservations/${createdReservation.id}`)
    .send(createdReservation);
}

exports.editById = 
async (req, res) => {
    const reservation = await getReservation(req, res);
    if (!reservation) {return}
    if (!req.body.client_id || 
        !req.body.datetime || 
        !req.body.adult_count || 
        !req.body.children_count) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
    reservation.client_id = req.body.client_id;
    reservation.datetime = req.body.datetime;
    reservation.adult_count = req.body.adult_count;
    reservation.children_count = req.body.children_count;
    await reservation.save();
    return res
    .location(`${Utils.getBaseUrl(req)}/reservations/${reservation.id}`)
    .send(reservation);
}

exports.deleteById = 
async (req, res) => {
    const reservation = await getReservation(req, res);
    if(!reservation) {return}
    await reservation.destroy();
    res.status(204).send({Error: 'No Content'});
}