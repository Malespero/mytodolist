'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('TodoModels', ['todolistmodelId'], {
      type: 'foreign key',
      name: 'todolistmodelId',
      references: {
        table: 'todolistmodels',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TodoModels');
  }
};
