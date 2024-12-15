const Blog = require("../models/blogModel");

// Get all blogs
const getBlogs = async (req, res) => {
  console.log("getBlogs called");
  try {
    const blogs = await Blog.find(); // Fetch all blogs from the database
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};

// Get a blog by ID
const getBlogById = async (req, res) => {
  console.log("getBlogById called");
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    res.status(500).json({ message: "Error fetching blog", error });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  console.log("createBlog called");
  try {
    const { title, content, author, categories, tags, status } = req.body;

    // Validate required fields
    if (!title || !content || !author || !status) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    // Create a new blog object
    const newBlog = new Blog({
      title,
      content,
      author,
      categories: categories || [],
      tags: tags || [],
      status,
    });

    // Save the blog to the database
    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Update a blog by ID
const updateBlog = async (req, res) => {
  console.log("updateBlog called");
  const { id } = req.params;
  const { title, content, author, categories, tags, status } = req.body;

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Update blog fields
    if (title) blog.title = title;
    if (content) blog.content = content;
    if (author) blog.author = author;
    if (categories) blog.categories = categories || [];
    if (tags) blog.tags = tags || [];
    if (status) blog.status = status;

    // Save the updated blog
    const updatedBlog = await blog.save();

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
  console.log("deleteBlog called");
  const { id } = req.params;

  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
