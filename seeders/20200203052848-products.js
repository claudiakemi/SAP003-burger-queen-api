'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('products', [
        {
          name: 'Café americano',
          price: 5,
          breakfast: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Café com leite',
          price: 5,
          breakfast: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Suco de laranja',
          price: 7,
          breakfast: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Misto quente',
          price: 10,
          breakfast: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hamburguer simples bovino',
          price: 10,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hamburguer simples frango',
          price: 10,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hamburguer simples vegetariano',
          price: 10,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hamburguer duplo bovino',
          price: 15,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hamburguer duplo frango',
          price: 15,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hamburguer duplo vegetariano',
          price: 15,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Queijo',
          price: 1,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ovo',
          price: 1,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Batata frita',
          price: 5,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Anéis de cebola',
          price: 5,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Refrigerante 500ml',
          price: 7,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Refrigerante 750ml',
          price: 10,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Água 500ml',
          price: 5,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Água 750ml',
          price: 5,
          breakfast: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
          */

      return queryInterface.bulkDelete('products', null, {});

  }
};
