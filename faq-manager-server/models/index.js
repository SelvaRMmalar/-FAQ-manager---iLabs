const dbConfig = require('../config/dbConfig.js');

const { Sequelize, dataType, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log('Error:' + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.faqs = require('./faqModels.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('sync is done');
});

module.exports = db;
