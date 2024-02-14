const mysql = require('mysql2')
require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASS,
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to host: ', error)
    } else {
        console.log("Connected to db");
    }
})

connection.execute("CREATE DATABASE IF NOT EXISTS groupomania", (error) => {
    if (error) {
        console.log(error);
    } else {
        //console.log("Database created")
        return null
    }
});

connection.changeUser({database: "groupomania"}, (error) => {
    if (error) {
        console.log(error)
    } else {
        //console.log("Database groupomania selected")
        return null;
    }
});

//connection.execute("DROP TABLE IF EXISTS users")
connection.execute(`CREATE TABLE IF NOT EXISTS users(
    userID int AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    bio VARCHAR(100),
    PRIMARY KEY(userID),
    UNIQUE(email)
)`, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Table users created");
    }
});

//connection.execute("DROP TABLE IF EXISTS posts")
connection.execute(
    `CREATE TABLE IF NOT EXISTS posts(
    postID int AUTO_INCREMENT PRIMARY KEY,
    userID int NOT NULL,
    title VARCHAR(100) NOT NULL,
    message VARCHAR(300) NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modify_date TIMESTAMP,
    readBy TEXT
)`,
    (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Table posts created");
        }
    }
);

