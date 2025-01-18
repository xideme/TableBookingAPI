const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATANAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOSTNAME,
        dialect: 'mariadb',
        logging: console.log,
        
    }
);

async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (error) {
        console.log("Unable to connect: " + error);
    }
};

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Client = require("./models/Client.js")(sequelize, DataTypes);
db.Reservation = require("./models/Reservation.js")(sequelize, DataTypes);
db.Table = require("./models/Table.js")(sequelize, DataTypes);

const sync = async () => {
    await sequelize.sync({ alter: true });
    console.log('Database is now synchronized.');
};

module.exports = { db, sync };
console.log(process.env.DB_DATANAME);
console.log(process.env.DB_HOSTNAME);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);