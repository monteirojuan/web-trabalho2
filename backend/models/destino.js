'use strict';
const { Model, INET } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Destino extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Destino.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: DataTypes.STRING,
        preco: DataTypes.DECIMAL
    }, {
        sequelize,
        inicio: 'Destino',
    });
    return Destino;
};