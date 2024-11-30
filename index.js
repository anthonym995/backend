// Initialize required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./src/config/swaggerOptions");

// Initialize app and configure dotenv
dotenv.config();
const app = express(); // Initialize the app
const port = process.env.PORT || 3000;
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/swagger-static", swaggerUi.serveFiles(swaggerSpec, {}));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const userRoutes = require("./src/routes/userRoutes");

// Setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views")); // Ensure path is correct

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
