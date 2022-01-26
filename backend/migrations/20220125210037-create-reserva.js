'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      partida: {
        allowNull: false,
        type: Sequelize.DATE
      },
      retorno: {
        allowNull: false,
        type: Sequelize.DATE
      },
      preco: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      DestinoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Destinos',
          key: 'id'
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservas');

  }
};
