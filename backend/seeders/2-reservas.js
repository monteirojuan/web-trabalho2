'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservas', [
      {
        DestinoId: 1,
        PassageiroId: 1,
        partida: new Date('2022-12-17'),
        retorno: new Date('2022-12-19'),
        preco: 750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservas', null, {});
  }
};
