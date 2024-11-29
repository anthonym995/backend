const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Define routes
router.get("/", userController.getUsers); // Get all users
router.get("/:id", userController.getUserById); // Get user by ID

module.exports = router;
