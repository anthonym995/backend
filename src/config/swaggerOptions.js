const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Swagger specification version
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API Documentation",
    },
    servers: [
      {
        url: "https://nodejs-x.vercel.app/",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to your API route files
};

module.exports = swaggerOptions;