exports.getAllPosts = (req, res) => {
    console.log("Reached all posts")
    res.status(201).json({ message: "Found all posts" })
};
