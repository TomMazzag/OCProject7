const mysql = require('mysql2')
const envVariables = require('./environmentVariables')

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

connection.execute("DROP TABLE IF EXISTS users")
connection.execute(`CREATE TABLE IF NOT EXISTS users(
    userID VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    bio VARCHAR(100) NOT NULL,
    UNIQUE(email)
)`, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Table users created");
    }
});

connection.execute("DROP TABLE IF EXISTS posts")
connection.execute(
    `CREATE TABLE IF NOT EXISTS posts(
    postID VARCHAR(36) PRIMARY KEY,
    userID VARCHAR(36) NOT NULL,
    name VARCHAR(100) NOT NULL,
    media VARCHAR(100),
    title VARCHAR(100) NOT NULL,
    message VARCHAR(100) NOT NULL,
    creation_date TIMESTAMP,
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



