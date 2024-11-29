const users = require("../data/users");

// Get all users
const getAllUsers = () => {
  return users;
};

// Find user by ID
const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

module.exports = {
  getAllUsers,
  getUserById,
};
