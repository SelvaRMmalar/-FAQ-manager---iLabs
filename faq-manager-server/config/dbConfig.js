const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  HOST: process.env.APP_HOAT,
  DB: process.env.APP_DB,
  USER: process.env.APP_USER,
  PASSWORD: process.env.APP_PASSWORD,
  dialect: 'mysql',
};
