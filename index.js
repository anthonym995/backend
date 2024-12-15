const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const { connectToDatabase } = require("./src/config/db");
const swaggerOptions = require("./src/config/swaggerOptions");
const corsOptions = require("./src/config/corsConfig");
const userRoutes = require("./src/routes/userRoutes");
const blogRoutes = require("./src/routes/blogRoutes");

dotenv.config(); // Load environment variables
const app = express();
const port = process.env.PORT || 3000;

// Set up Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(cors(corsOptions));
app.use("/swagger-static", express.static(path.join(__dirname, "node_modules", "swagger-ui-dist")));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => res.render("index"));
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

// Start the server and connect to MongoDB
const startServer = async () => {
  try {
    await connectToDatabase(); // Establish MongoDB connection
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error starting the server:", err);
    process.exit(1); // Exit the process if the DB connection fails
  }
};

startServer();
