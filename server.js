// Initialize required modules
const express = require("express");
const app = express(); // Initialize the app
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const port = process.env.PORT || 3000;

// Setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views")); // Ensure path is correct

// Enable CORS (optional)
// app.use(cors());

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, "public")));

// Sample user data
const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User" },
  { id: 3, name: "Sam Johnson", email: "sam.johnson@example.com", role: "User" },
  { id: 4, name: "Anna Brown", email: "anna.brown@example.com", role: "Admin" },
  { id: 5, name: "Chris Lee", email: "chris.lee@example.com", role: "User" },
  { id: 6, name: "David Wilson", email: "david.wilson@example.com", role: "User" },
  { id: 7, name: "Sarah White", email: "sarah.white@example.com", role: "Admin" },
  { id: 8, name: "Mark Adams", email: "mark.adams@example.com", role: "User" },
  { id: 9, name: "Lucy Scott", email: "lucy.scott@example.com", role: "Admin" },
  { id: 10, name: "Paul Evans", email: "paul.evans@example.com", role: "User" },
];

// Serve the users' data
app.get("/users", (req, res) => {
  res.json(users); // Send back the list of users as JSON
});

// Define a route
app.get("/", (req, res) => {
  res.render("index"); // Render the 'index.ejs' view
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
