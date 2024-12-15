// index.js or your main script
const { connectDB } = require("./db");
const User = require("../models/userModel");
const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

const { generateFakeUsers } = require("./fakeUserData");
const { generateFakeBlogs } = require("./fakeBlogData");

// Load environment variables
require("dotenv").config();

// MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

// Main function to generate and insert fake users and products
async function main() {
  await connectDB(mongoURI);

  const fakeUsers = generateFakeUsers(10);
  const fakeBlogs = generateFakeBlogs(15);

  try {
    // Insert fake users
    const userResult = await User.insertMany(fakeUsers);
    console.log(`Inserted ${userResult.length} fake users into the database.`);

    // Insert fake blogs
    const blogResult = await Blog.insertMany(fakeBlogs);
    console.log(`Inserted ${blogResult.length} fake blogs into the database.`);
  } catch (error) {
    console.error("Error inserting fake users or products:", error);
  } finally {
    mongoose.disconnect(); // Disconnect from the database after the operation
  }
}

// Run the main function
main();
