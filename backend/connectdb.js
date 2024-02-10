const mysql = require("mysql2")
const env = require("dotenv").config();
console.log("Connecting to database...");
let connectdb = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

connectdb.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connectdb;