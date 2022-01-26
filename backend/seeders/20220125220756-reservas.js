'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservas', [
      {
        DestinoId: 1,
        partida: Date('December 17, 2022 03:24:00'),
        retorno: Date('December 19, 2022 19:02:00'),
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
