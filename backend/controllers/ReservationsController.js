const { db } = require('../db');
const Utils = require('./utils');

exports.getAll = async (req, res) => {
    try {
        const reservations = await db.Reservation.findAll({
            attributes: ['id', 'client_id', 'table_id', 'datetime', 'adult_count', 'children_count']
        });
        res.status(200).send(reservations);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching reservations' });
    }
};

exports.getById = async (req, res) => {
    try {
        const reservation = await db.Reservation.findByPk(req.params.id, {
            attributes: ['id', 'client_id', 'table_id', 'datetime', 'adult_count', 'children_count']
        });
        if (!reservation) {
            return res.status(404).send({ error: 'Reservation not found' });
        }
        res.send(reservation);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching the reservation' });
    }
};

exports.create = async (req, res) => {
    if (!req.body.client_id || !req.body.table_id || !req.body.datetime || !req.body.adult_count || !req.body.children_count) {
        return res.status(400).send({ error: 'Missing one or more parameters' });
    }
    try {
        const newReservation = {
            client_id: req.body.client_id,
            table_id: req.body.table_id,
            datetime: req.body.datetime,
            adult_count: req.body.adult_count,
            children_count: req.body.children_count
        };
        const createdReservation = await db.Reservation.create(newReservation);
        return res
            .status(201)
            .location(`${Utils.getBaseUrl(req)}/reservations/${createdReservation.id}`)
            .send(createdReservation);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while creating the reservation' });
    }
};

exports.updateReservation = async (req, res) => {
    const reservationId = req.params.id;
    const { client_id, table_id, datetime, adult_count, children_count } = req.body;

    try {
        const reservation = await db.Reservation.findByPk(reservationId);
        if (!reservation) {
            return res.status(404).send({ error: 'Reservation not found' });
        }

        reservation.client_id = client_id;
        reservation.table_id = table_id;
        reservation.datetime = datetime;
        reservation.adult_count = adult_count;
        reservation.children_count = children_count;

        await reservation.save();

        res.status(200).send(reservation);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while updating the reservation' });
    }
};

exports.deleteById = async (req, res) => {
    const reservation = await getReservation(req, res);
    if (!reservation) { return }
    await reservation.destroy();
    res.status(204).send({ Error: 'No Content' });
}

const getReservation = async (req, res) => {
    const idNumber = parseInt(req.params.id);
    if (isNaN(idNumber)) {
        res.status(400).send({ Error: `ID must be a whole number: ${idNumber}` });
        return null;
    }
    const reservation = await db.Reservation.findByPk(idNumber);
    if (!reservation) {
        res.status(404).send({ Error: `Reservation with this id not found: ${idNumber}` });
        return null;
    }
    return reservation;
}
