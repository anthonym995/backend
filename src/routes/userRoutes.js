const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieves a list of all users from the database
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique ID of the user
 *                   name:
 *                     type: string
 *                     description: The name of the user
 *                   email:
 *                     type: string
 *                     description: The email address of the user
 *                   phone:
 *                     type: string
 *                     description: The phone number of the user
 *                   address:
 *                     type: string
 *                     description: The address of the user
 *                   role:
 *                     type: string
 *                     description: The role of the user (Admin/User)
 *                 example:
 *                   id: 1
 *                   name: "John Doe"
 *                   email: "john.doe@example.com"
 *                   phone: "913488783827"
 *                   address: "123 Main Street, City A"
 *                   role: "Admin"
 */
router.get("/", userController.getUsers); // Get all users

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieves a single user by their unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The unique ID of the user
 *                 name:
 *                   type: string
 *                   description: The name of the user
 *                 email:
 *                   type: string
 *                   description: The email address of the user
 *                 phone:
 *                   type: string
 *                   description: The phone number of the user
 *                 address:
 *                   type: string
 *                   description: The address of the user
 *                 role:
 *                   type: string
 *                   description: The role of the user (Admin/User)
 *               example:
 *                 id: 1
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *                 phone: "913488783827"
 *                 address: "123 Main Street, City A"
 *                 role: "Admin"
 *       404:
 *         description: User not found
 */
router.get("/:id", userController.getUserById); // Get user by ID

module.exports = router;
