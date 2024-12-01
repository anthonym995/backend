const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const mongoURI = process.env.MONGO_URI;

  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    throw err;
  }
};

module.exports = { connectToDatabase };
