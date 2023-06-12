'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_in_carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products_in_carts.belongsTo(models.carts, {
        foreignKey: 'cart_id'});

      products_in_carts.hasMany(models.products, {
        foreignKey: 'product_id'});
    }
  }
  products_in_carts.init({
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.REAL,
    quantity: DataTypes.SMALLINT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products_in_carts',
  });
  return products_in_carts;
};
