const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
    try {
        const { fullName, email, mobile, address, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        //bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            fullName,
            email,
            mobile,
            address,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "Account created successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password",
            });
        }

        //Create JWT Token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateProfile = async (req, res) => {
    try {

        const { fullName, mobile, address } = req.body;

        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        user.fullName = fullName;
        user.mobile = mobile;
        user.address = address;

        await user.save();

        res.status(200).json({
            message: "Profile updated successfully",
            user,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const changePassword = async (req, res) => {
    try {

        const { currentPassword, newPassword } = req.body;

        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Current password is incorrect",
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;

        await user.save();

        res.status(200).json({
            message: "Password changed successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


module.exports = {
    signupUser,
    loginUser,
    getProfile,
    updateProfile,
    changePassword,
};
