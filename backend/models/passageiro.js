'use strict';
const { DATE } = require('sequelize');
const { Model, INET } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Passageiro extends Model {
        static associate(models) {
            this.hasMany(models.Reserva)
        }
    }
    Passageiro.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Passageiro',
    });
    return Passageiro;
};