'use strict';
const { Model, INET } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Reserva extends Model {
        static associate(models) {
            this.belongsTo(models.Destino, { foreignKey: { allowNull: false } })
        }
    }
    Reserva.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        partida: DataTypes.DATE,
        retorno: DataTypes.DATE,
        preco: DataTypes.DECIMAL
    }, {
        sequelize,
        modelName: 'Reserva',
    });
    return Reserva;
};