
const Order = require('./Order')
const { sequelize,DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  
});

Order.belongsTo(User); 
User.hasMany(Order);

module.exports = User;
