module.exports = (sequelize, DataTypes) => {
    const Tables = sequelize.define('Tables', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        reservation_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Reservations', // Reference to another model
                key: 'id'              // Column name of the referenced model
            }
        },
        seats: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Tables;
};
