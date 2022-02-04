'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Reserva extends Model {
        static associate(models) {
            this.belongsTo(models.Destino, { as: 'destino', foreignKey: { allowNull: false } })
            this.belongsTo(models.Passageiro, { as: 'passageiro', foreignKey: { allowNull: false } })
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