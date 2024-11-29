// Initialize required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

// Initialize app and configure dotenv
dotenv.config();
const app = express(); // Initialize the app
const port = process.env.PORT || 3000;

// Import user routes
const userRoutes = require("./src/routes/userRoutes");

// Setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views")); // Ensure path is correct

// Enable CORS (optional)
// app.use(cors());

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, "public")));

// Define a route
app.get("/", (req, res) => {
  res.render("index"); // Render the 'index.ejs' view
});

// Serve the users' data
app.use("/api/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
