'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    client: DataTypes.STRING,
    status: DataTypes.STRING,
    table: DataTypes.DECIMAL
  }, {});
  orders.associate = function(models) {
    orders.hasMany(models.orderItems)
    // associations can be defined here
  };
  return orders;
};
