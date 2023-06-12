'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_in_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products_in_orders.belongsTo(models.orders, {
        foreignKey: 'order_id'});

      products_in_orders.hasMany(models.products, {
        foreignKey: 'product_id'});
    }
  }
  products_in_orders.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.REAL,
    quantity: DataTypes.SMALLINT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products_in_orders',
  });
  return products_in_orders;
};
