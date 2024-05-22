const { Sequelize } = require('sequelize');

const dbName = 'gymdb';
const dbUser = 'root';
const dbPass = 'root';
const dbHost = 'localhost';


const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected database');
  })
  .catch((error) => {
    console.error('failed to connect to the database:', error);
  });

module.exports = sequelize;
