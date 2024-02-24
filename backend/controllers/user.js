const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../connectdb")
require("dotenv").config();

exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then((hash) => {
        const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        const values = [req.body.name, req.body.email, hash];
        connection.query(sql, values, (error) => {
            if (error) {
                if (error.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ error: "Email already exists" });
                } else {
                console.error(error)
                res.status(500).json({ error: "Problem adding to users"})
                }
            }
            res.status(201).json({ message: "User created successfully" });
        })
    }).catch ((error) => {
        console.error(error)
        res.status(500).json({ error: "Error hashing the password" })
    })
};

exports.login = (req, res) => {
    const sql = "SELECT userID, email, password FROM users WHERE email = ?";
    const values = [req.body.email];
    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error(error)
        }
        bcrypt
            .compare(req.body.password, results[0].password)
            .then((valid) => {
                if (!valid) {
                    return res.status(401).json({
                        error: new Error("Incorrect password!"),
                    });
                }
                const token = jwt.sign(
                    { userId: results[0].userID },
                    process.env.SECRET_TOKEN,
                    { expiresIn: "24h" }
                );
                res.status(200).json({
                    userId: results[0].userID,
                    token: token,
                });
            })
            .catch((error) => {
                res.status(500).json({
                    error: error,
                });
            });
    })
};

exports.getUserDetails = (req, res) => {
    const sql = `
    SELECT * FROM users
    WHERE userId = ?
    `;
    const values = [req.userId];
    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "Problem getting details" });
        }
        res.status(200).json({
            message: "Collected user details successfully",
            details: results[0],
        });
    });
};

exports.updateDetails = (req, res) => {
    const { name, email, bio } = req.body;

    const changedFields = [];
    if (name) changedFields.push("name");
    if (email) changedFields.push("email");
    if (bio) changedFields.push("bio");
    let sql = `UPDATE users SET`
    const values = []

    changedFields.forEach((field, index) => {
        sql += ` ${field} = ?`;
        values.push(req.body[field]);
        if (index < changedFields.length - 1) {
            sql += ",";
        }
    });

    
    sql += ` WHERE userId = ?`;
    values.push(req.userId);
    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "Problem getting details" });
        }
        res.status(201).json({
            message: "Collected user details successfully",
            details: results[0],
        });
    });
}

exports.delete = (req, res) => {
    const sql = "DELETE FROM users WHERE userId = ?";
    const values = [req.userId];
    connection.query(sql, values, (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "Problem deleting user" });
        }
        res.status(202).json({
            message: "User deleted successfully"
        });
    });
}
