const { Sequelize, DataTypes } = require("sequelize");
const cloudinary = require('cloudinary').v2;

const dbName = "gymdb";
const dbUser = "root";
const dbPass = "root";
const dbHost = "localhost";

cloudinary.config({
  cloud_name: 'bacem',
  api_key: '681412664529868',
  api_secret: 'rqqXeT2ACJcWFMRrF5IVOsc8fG8'
});

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected database");
  })
  .catch((error) => {
    console.error("failed to connect to the database:", error);
  });

const User = require("../Models/user")(sequelize, DataTypes);
const Product = require("../Models/product")(sequelize, DataTypes);
const Order=require("../Models/order")(sequelize,DataTypes);

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Tables created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create tables:", error);
//   });

  const db = {};

  db.connection = sequelize;
  db.Sequelize = Sequelize;
  
  db.User = User;
  db.Product = Product;
  db.Order=Order;


  db.User.hasMany(db.Order,{foreignKey: 'userId'});
  db.Order.belongsTo(db.User,{foreignKey: 'userId'})
  
  // export your Model Phrase below
  module.exports = db;


