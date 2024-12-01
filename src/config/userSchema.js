// src/config/userSchema.js

const userSchema = {
  User: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The name of the user",
      },
      email: {
        type: "string",
        description: "The email address of the user",
      },
      phone: {
        type: "string",
        description: "The phone number of the user",
      },
      address: {
        type: "string",
        description: "The address of the user",
      },
      role: {
        type: "string",
        description: "The role of the user (Admin/User)",
      },
    },
  },
};

module.exports = userSchema;
