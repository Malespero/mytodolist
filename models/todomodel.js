'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoModel = sequelize.define('TodoModel', {
    text: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    number: DataTypes.DOUBLE
  }, {});
  TodoModel.associate = function(models) {
    // associations can be defined here
  };
  return TodoModel;
};
