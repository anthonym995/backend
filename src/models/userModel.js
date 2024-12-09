const mongoose = require("mongoose");

// Define the schema for a user with enhanced validation
const userSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: [true, "UUID is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true,
    maxlength: [200, "Address cannot exceed 200 characters"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: {
      values: ["Admin", "User"],
      message: "Role must be either 'Admin' or 'User'",
    },
  },
});

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;
