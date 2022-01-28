'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Destinos', [
      { nome: 'Fortaleza', preco: 350.00, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Natal', preco: 350.00, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Recife', preco: 400, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Salvador', preco: 650, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Rio de Janeiro', preco: 650, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'São Paulo ', preco: 750, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'París', preco: 2200, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Frankfurt', preco: 650, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Berlim', preco: 2600, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Barcelona', preco: 2950, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Amsterdã', preco: 3000, createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Destinos', null, {});
  }
};
