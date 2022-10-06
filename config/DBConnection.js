const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  unix_socket: "/Applications/MAMP/tmp/mysql/mysql.sock",
  database: "enablemint",
  raise_on_warnings: true,
});

mysqlConnection.connect(function (err) {
  if (err) throw err;
  console.log("MySQL DB Connected!");
});

module.exports = mysqlConnection;
