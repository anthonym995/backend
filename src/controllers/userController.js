const { v4: uuidv4 } = require("uuid"); // Import the uuid library
const userModel = require("../models/userModel");
const User = require("../models/userModel");

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users", error });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ id: parseInt(id, 10) });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Error fetching user", error });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, phone, address, role } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required." });
    }
    const id = uuidv4(); // Generate a unique ID for the user

    // Create a new user in the database
    const newUser = new User({ id, name, email, phone, address, role });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the created user
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUsers, getUserById, createUser };
