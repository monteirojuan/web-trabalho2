'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Destinos', [
      { nome: 'Fortaleza', preco: 1000.00, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Gramado', preco: 1010.00, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Recife', preco: 200, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Salvador', preco: 2500, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Rio de Janeiro', preco: 2300, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'São Paulo', preco: 2100, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'París', preco: 3300, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Londres', preco: 2789, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Berlim', preco: 3500, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Barcelona', preco: 2780, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Amsterdã', preco: 3000, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'São Luís', preco: 2000, createdAt: new Date(), updatedAt: new Date() },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Destinos', null, {});
  }
};
