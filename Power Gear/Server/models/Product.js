
const { DataTypes,sequelize } = require('sequelize');
const { toDefaultValue } = require('sequelize/lib/utils');



const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  outOfStock:{
   type: DataTypes.BOOLEAN,
   defaultValue:false
  }
});

module.exports = Product;
