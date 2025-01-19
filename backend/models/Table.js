module.exports = (sequelize, DataTypes) => {
    const Table = sequelize.define('Table', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        seats: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Table;
};
