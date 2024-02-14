const connection = require("../connectdb");

exports.getAllPosts = (req, res) => {
    const sql = "SELECT * FROM posts";
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "Problem getting post" });
        }
        res.status(201).json({
            message: "Collected all posts successfully",
            posts: results
        });
    });
};

exports.addNewPost = (req, res) => {
    const sql = "INSERT INTO posts (userId, title, message) VALUES (?, ?, ?)";
    const values = [req.userId, "Example Title", req.body.message];
    connection.query(sql, values, (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: "Problem adding post" });
        }
        res.status(201).json({
            message: "Post created successfully",
        });
    });
};
