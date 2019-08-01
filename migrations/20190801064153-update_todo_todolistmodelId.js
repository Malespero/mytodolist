'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('TodoModels', 'todolistmodelId', Sequelize.INTEGER);

    },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('TodoModels');
  }
};
