const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
    console.log(req.body.email);
    res.status(201);
};

exports.login = (req, res) => {};
