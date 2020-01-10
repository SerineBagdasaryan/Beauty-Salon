const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "developer",
    database: "salon",
    password: "123456"
});
module.exports = pool;