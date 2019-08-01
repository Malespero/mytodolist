'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*return queryInterface.addConstraint('TodoModels', ['todolistmodelId'], {
      type: 'foreign key',
      name: 'todolistmodelId',
      references: {
        table: 'todolistmodels',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })*/

    return queryInterface.addColumn('TodoModels', 'todolistmodelId', Sequelize.INTEGER);

    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
