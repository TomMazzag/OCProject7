const mysql = require("mysql2")
const env = require("dotenv").config();

console.log("Connecting to database...");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASS,
    database: process.env.DB_NAME,
});

connection.connect((error) => {
    if (error) {
        console.error("Error connecting to host: ", error);
    } else {
        console.log("Connected to db");
    }
});

module.exports = connection;