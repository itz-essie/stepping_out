const mysql = require('mysql');
require('dotenv').config()
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASS,
  database: 'date_ideas',
});
};
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});
module.exports = connection;


// require("dotenv").config();
// module.exports=
// {
//   "development": {
//     "username": "root",
//     "password": process.env.DB_PASS,
//     "database": "date_ideas",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": process.env.DB_PASS,
//     "database": "date_ideas",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": process.env.DB_PASS,
//     "database": "date_ideas",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
