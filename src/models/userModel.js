const mongoose = require("mongoose");

// Define the schema for a user
const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  role: { type: String, required: true, enum: ["Admin", "User"] },
});

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;
