import Investments from './Investments'

module.exports = (sequelize, DataTypes) => {
    const Values = sequelize.define("values", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: DataTypes.DATE,
            notEmpty: true,
            isDate: true
        },
        value: {
            type: DataTypes.FLOAT,
            notEmpty: true,
        }
    })

    Values.associate = (models) => {
        Values.belongsTo(models.investments)
    }

    return Values
}