

const { DataTypes } = require('sequelize');
const {sequelize} = require('sequelize');
const User = require('./User');
const Product = require('./Product');

const Order = sequelize.define('Order', {
 products:{
  type: DataTypes.STRING,
  allowNull:false
 },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    defaultValue: 'pending',
    allowNull: false,
  },
});

Order.belongsTo(User); 
User.hasMany(Order);

module.exports = Order;
