'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'TodoModels',
       'number',
       {
        type: Sequelize.DOUBLE
    }
  );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TodoModels');
  }
};
