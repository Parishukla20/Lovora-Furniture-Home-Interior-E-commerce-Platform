const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    signupUser,
    loginUser,
    getProfile,
    updateProfile,
    changePassword,
} = require("../controllers/userController");

router.post("/signup", signupUser);
router.post("/login", loginUser);

// Protected Route
router.get("/profile", authMiddleware, getProfile);
// Update Profile
router.put("/profile", authMiddleware, updateProfile);
//Update Password
router.put("/change-password", authMiddleware, changePassword);

module.exports = router;