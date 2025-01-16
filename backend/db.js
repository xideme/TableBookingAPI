require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATANAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOSTNAME,
        dialect: 'mariadb',
        logging: console.log
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (error) {
        console.log("Unable to connect: " + error);
    }
})();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.clients = require("./models/clients.js")(sequelize, DataTypes);
db.reservations = require("./models/reservations.js")(sequelize, DataTypes);
db.tables = require("./models/tables.js")(sequelize, DataTypes);

const sync = async () => {
    await sequelize.sync({ alter: true });
    console.log('Database is now synchronized.');
};

module.exports = { db, sync };
