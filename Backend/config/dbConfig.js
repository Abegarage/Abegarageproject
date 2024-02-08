require("dotenv").config();
const mysql = require("mysql2");

const dbConnection = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  connectionLimit: 10,
});

const pool = 

module.exports = dbConnection.promise();


