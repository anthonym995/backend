const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "API documentation",
  },
  host: "localhost:3000", // Your API base URL
  schemes: ["http"], // If you're using https, change this to ['https']
};

const outputFile = "./src/config/swagger-output.json"; // Swagger spec output file
const endpointsFiles = ["./src/routes/userRoutes.js"]; // Path to your route files

// Generate the Swagger spec
swaggerAutogen(outputFile, endpointsFiles, doc);
