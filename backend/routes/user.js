const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/details", auth, userController.getUserDetails);
router.put("/update", auth, userController.updateDetails)
router.delete("/delete", auth, userController.delete)

module.exports = router;