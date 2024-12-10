module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Clients', // Reference to another model
                key: 'id'         // Column name of the referenced model
            }
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        adult_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        children_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Reservation;
};
