'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("cars", [{
    brand: "Ferrari",
    model: "Enzo",
    year: 2002,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    brand: "lamborghini",
    model: "Veneno",
    year: 2014,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    brand: "Porsche",
    model: "Spyder",
    year: 2010,
    createdAt: new Date(),
    updatedAt: new Date()  }], 
    {}); 
 },
};  

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }

