// Initialize required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./src/config/swaggerOptions");
const corsOptions = require("./src/config/corsConfig");

// Initialize app and configure dotenv
dotenv.config();
const app = express(); // Initialize the app
const port = process.env.PORT || 3000;
const swaggerSpec = swaggerJsdoc(swaggerOptions);
const userRoutes = require("./src/routes/userRoutes");

app.use(cors(corsOptions));
app.use("/swagger-static", express.static(path.join(__dirname, "node_modules", "swagger-ui-dist")));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views")); // Ensure path is correct
// Serve static files (if needed)
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => res.render("index"));
app.use("/api/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
