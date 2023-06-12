'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.users, {
        foreignKey: 'user_id'});

      products.belongsTo(models.products_in_carts, {
        foreignKey: 'product_id'});

      products.belongsTo(models.products_in_orders, {
        foreignKey: 'product_id'});
    }
  }
  products.init({
    product_img: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.REAL,
    stock: DataTypes.SMALLINT,
    status: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products'
  });
  return products;
};
