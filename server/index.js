const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const userRoutes = require("./routes/userRoutes");

// Connect MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((err) => {
        console.log("Database Connection Error:", err);
    });

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});