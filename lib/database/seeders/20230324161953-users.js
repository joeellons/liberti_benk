'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const currentTime = new Date(new Date().toUTCString()).toISOString();

    return await queryInterface.bulkInsert("Users", [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@email.com',
      accountNumber: '12345678',
      createdAt: currentTime, 
      updatedAt: currentTime
    }])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('People', null, {});
  }
};
