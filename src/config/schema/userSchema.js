// src/config/userSchema.js

const createStringProperty = (description) => ({
  type: "string",
  description,
});

const userSchema = {
  User: {
    type: "object",
    properties: {
      uuid: createStringProperty("The uuid of the user"),
      name: createStringProperty("The name of the user"),
      email: createStringProperty("The email address of the user"),
      phone: createStringProperty("The phone number of the user"),
      address: createStringProperty("The address of the user"),
      role: createStringProperty("The role of the user (admin/user)"),
      bio: createStringProperty("A short biography of the user"),
      image: createStringProperty("The URL of the user's profile picture"),
    },
    required: ["name", "email", "phone", "address", "role"], // uuid is not required for the request
  },
  UserRequest: {
    type: "object",
    properties: {
      name: createStringProperty("The name of the user"),
      email: createStringProperty("The email address of the user"),
      phone: createStringProperty("The phone number of the user"),
      address: createStringProperty("The address of the user"),
      role: createStringProperty("The role of the user (Admin/User)"),
      bio: createStringProperty("A short biography of the user"),
      image: createStringProperty("The URL of the user's profile picture"),
    },
    required: ["name", "email", "phone", "address", "role"], // uuid is not part of the request
  },
};

module.exports = userSchema;
