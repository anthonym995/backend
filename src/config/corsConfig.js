// src/config/corsConfig.js
const corsOptions = {
  origin: "http://localhost:5173", // Allow requests only from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  credentials: true, // Enable cookies if needed
};

module.exports = corsOptions;
