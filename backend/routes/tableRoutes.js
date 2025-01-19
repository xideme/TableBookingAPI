const TablesController = require("../controllers/TablesController.js");

module.exports = (app) => {
    app.route("/tables")
    .get(TablesController.getAll)
    .post(TablesController.create)
    app.route("/tables/:id")
    .get(TablesController.getById)
    .put(TablesController.updateTable)
    .delete(TablesController.deleteById)
}