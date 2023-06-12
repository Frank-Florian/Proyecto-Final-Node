'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      carts.belongsTo(models.users, {
        foreignKey: 'user_id'});

      carts.hasMany(models.products_in_carts, {
        foreignKey: 'cart_id'});
    }
  }
  carts.init({
    user_id: DataTypes.INTEGER,
    total_price: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'carts',
  });
  return carts;
};
