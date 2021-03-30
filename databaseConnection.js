const mysql = require("mysql2");

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
  host: "us-cdbr-east-03.cleardb.com",
  user: "be92f2823cdbe0",
  password: "562283e6",
  database: "heroku_f3df4ecbfcf7594",
  multipleStatements: false,
  namedPlaceholders: true,
};

const dbConfigLocal = {
  host: "localhost",
  user: "root",
  password: "Password",
  database: "lab_example",
  multipleStatements: false,
  namedPlaceholders: true,
};

if (is_heroku) {
  var database = mysql.createPool(dbConfigHeroku);
} else {
  var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
