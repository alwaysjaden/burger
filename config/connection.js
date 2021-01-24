// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "yjcck91n85d4xejv",
  password: "ayjv9lkduppdwqwu",
  database: "g3qhzndmufnhlja7"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
