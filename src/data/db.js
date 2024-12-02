const mongoose = require("mongoose");

// MongoDB connection function
async function connectDB(uri) {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process on connection error
  }
}

// Export the connection function
module.exports = { connectDB };
