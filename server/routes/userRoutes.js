const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    signupUser,
    loginUser,
    getProfile,
    updateProfile,
} = require("../controllers/userController");

router.post("/signup", signupUser);
router.post("/login", loginUser);

// Protected Route
router.get("/profile", authMiddleware, getProfile);
// Update Data
router.put("/profile", authMiddleware, updateProfile);

module.exports = router;