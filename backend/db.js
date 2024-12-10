db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.clients = require("./models.client")(sequelize, DataTypes);
db.users = require("./models.user")(sequelize, DataTypes);

const sync = (async () => {
    await sequelize.sync({alter: true});
})