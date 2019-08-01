'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoModel = sequelize.define('TodoModel', {
    text: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    number: DataTypes.DOUBLE
  }, {});
  TodoModel.associate = function(models) {
    TodoModel.belongsTo(models.todolistmodel);
  };
  return TodoModel;
};
