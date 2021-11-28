let mysql = require('mysql');

let db = mysql.createConnection(
  {
    host: 'localhost',
    database: 'db_farmer_aider_system',
    user: 'root',
    password: ''
  }
);

db.connect();
module.exports = db;
