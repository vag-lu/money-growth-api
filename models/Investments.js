module.exports = (sequelize, DataTypes) => {
    const Investments = sequelize.define("investments", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            notEmpty: true,
        }
    })

    Investments.associate = (models) => {
        Investments.hasMany(models.values)
    }

    return Investments;
}