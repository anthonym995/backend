// src/config/corsConfig.js
const corsOptions = {
  origin: "*", // Allow requests from any origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  credentials: true, // Enable cookies if needed (make sure your frontend supports this)
};

module.exports = corsOptions;
