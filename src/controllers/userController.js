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
  const { uuid } = req.params;
  console.log(uuid, "uuid of the object");
  try {
    const user = await User.findOne({ uuid });
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
    if (!name || !email || !phone || !address || !role) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Generate a unique UUID for the user
    const uuid = uuidv4();
    console.log(`Generated UUID: ${uuid}`);

    // Create a new user object
    const newUser = new User({ uuid, name, email, phone, address, role });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send response with the created user
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUsers, getUserById, createUser };
