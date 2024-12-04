const userSchema = require("./userSchema");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Swagger specification version
    info: {
      title: "Project-x",
      version: "1.0.0",
      description: "API Documentation",
    },
    components: {
      schemas: userSchema,
    },
    servers: [
      {
        url: process.env.API_HOST || "http://localhost:3000", // Dynamically set the server URL based on the environment
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to your API route files
};

module.exports = swaggerOptions;
