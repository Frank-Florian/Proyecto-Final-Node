'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    
    static associate(models) {
      users.hasMany(models.carts, {
        foreignKey: 'user_id'});

      users.hasMany(models.orders, {
        foreignKey: 'user_id'});

      users.hasMany(models.products, {
        foreignKey: 'user_id'});
    }
  }
  users.init({
    avatar: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
