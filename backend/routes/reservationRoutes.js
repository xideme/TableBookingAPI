const ReservationsController = require("../controllers/ReservationsController.js");

module.exports = (app) => {
    app.route("/reservations")
    .get(ReservationsController.getAll)
    .post(ReservationsController.create)
    app.route("/reservations/:id")
    .get(ReservationsController.getById)
    .put(ReservationsController.updateReservation)
    .delete(ReservationsController.deleteById)
}