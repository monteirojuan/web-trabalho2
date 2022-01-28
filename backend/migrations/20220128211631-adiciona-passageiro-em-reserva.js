'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Reservas',
      'PassageiroId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Passageiros',
          key: 'id'
        }
      });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Reservas', 'PassageiroId')
  }
};
