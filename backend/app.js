require('dotenv').config();

const express = require("express")
const cors = require("cors")
const mysql = require("mysql2");
const app = express()

app.use(cors())
app.use(express.json())

const userRoute = require("./routes/user");
const postRoute = require("./routes/post");

app.use("/api/auth", userRoute);
app.use("/api/posts", postRoute);

module.exports = app