// src/config/blogSchema.js

const createStringProperty = (description) => ({
  type: "string",
  description,
});

const createArrayProperty = (description, itemsType = "string") => ({
  type: "array",
  description,
  items: { type: itemsType },
});

const createDateProperty = (description) => ({
  type: "string",
  format: "date-time",
  description,
});

const blogSchema = {
  Blog: {
    type: "object",
    properties: {
      _id: createStringProperty("The unique identifier of the blog (MongoDB ObjectId)"),
      title: createStringProperty("The title of the blog"),
      content: createStringProperty("The content of the blog"),
      author: createStringProperty("The author of the blog"),
      categories: createArrayProperty("The categories associated with the blog"),
      tags: createArrayProperty("The tags associated with the blog"),
      status: {
        type: "string",
        description: "The status of the blog (draft or published)",
        enum: ["draft", "published"],
      },
      createdAt: createDateProperty("The date the blog was created"),
      updatedAt: createDateProperty("The date the blog was last updated"),
    },
    required: ["title", "content", "author", "status"],
  },
  BlogRequest: {
    type: "object",
    properties: {
      title: createStringProperty("The title of the blog"),
      content: createStringProperty("The content of the blog"),
      author: createStringProperty("The author of the blog"),
      categories: createArrayProperty("The categories associated with the blog"),
      tags: createArrayProperty("The tags associated with the blog"),
      status: {
        type: "string",
        description: "The status of the blog (draft or published)",
        enum: ["draft", "published"],
      },
    },
    required: ["title", "content", "author", "status"],
  },
};

module.exports = blogSchema;
