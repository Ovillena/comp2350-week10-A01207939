const is_heroku = process.env.IS_HEROKU || false;
const dbConfigHeroku =
  "mysql://be92f2823cdbe0:562283e6@us-cdbr-east-03.cleardb.com/heroku_f3df4ecbfcf7594";
const dbConfigLocal = "mysql://root:Password@localhost/lab_example";
if (is_heroku) {
  var databaseConnectionString = dbConfigHeroku;
} else {
  var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;

// mysql://be92f2823cdbe0:562283e6@us-cdbr-east-03.cleardb.com/heroku_f3df4ecbfcf7594?reconnect=true
