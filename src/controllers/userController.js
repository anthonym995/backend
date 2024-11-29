const userModel = require("../models/userModel");

// Get all users
const getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
};

// Get a user by ID
const getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = userModel.getUserById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getUsers,
  getUserById,
};
