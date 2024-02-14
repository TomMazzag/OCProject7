const express = require("express");
const router = express.Router();

const postController = require("../controllers/post");
const auth = require("../middleware/auth");

router.post("/new", auth, postController.addNewPost);
router.get("/", auth, postController.getAllPosts);

module.exports = router;