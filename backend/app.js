require('dotenv').config();

const express = require("express")
const cors = require("cors")
const mysql = require("mysql2");
const app = express()

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASS,
});

connection.connect((error) => {
    if (error) {
        console.error("Error connecting to host: ", error);
    } else {
        console.log("Connected to db");
    }
});

app.use("/api/auth", userRoute);
app.use("/api/posts", postRoute);

module.exports = (app)