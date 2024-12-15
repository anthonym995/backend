const blogSchema = require("./schema/blogSchema");
const userSchema = require("./schema/userSchema");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Swagger specification version
    info: {
      title: "Project-x",
      version: "1.0.0",
      description: "API Documentation",
    },
    tags: [
      { name: "Users", description: "Operations related to users" },
      { name: "Blogs", description: "Operations related to blogs" },
    ],
    components: {
      schemas: { ...userSchema, ...blogSchema },
    },
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerOptions;
