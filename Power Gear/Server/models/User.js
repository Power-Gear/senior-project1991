
module.exports = (connection, DataTypes) => {
const User = connection.define('User', {
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
return User
}



