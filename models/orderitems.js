'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderItems = sequelize.define('orderItems', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    options: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  orderItems.associate = function(models) {
    orderItems.belongsTo(models.products);
    orderItems.hasMany(models.orders)
    // associations can be defined here
  };
  return orderItems;
};
