const ClientsController = require("../controllers/ClientsController.js");

module.exports = (app) => {
    app.route("/clients")
    .get(ClientsController.getAll)
    .post(ClientsController.create)
    app.route("/clients/:id")
    .get(ClientsController.getById)
    .put(ClientsController.editById)
    .delete(ClientsController.deleteById)
}