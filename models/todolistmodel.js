'use strict';
module.exports = (sequelize, DataTypes) => {
  const todolistmodel = sequelize.define('todolistmodel', {
    listname: DataTypes.STRING
  }, {});
  todolistmodel.associate = function(models) {
    // associations can be defined here
    todolistmodel.hasMany(models.TodoModel);
  };
  return todolistmodel;
};
