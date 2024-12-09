const express = require("express");
const userController = require("../controllers/userController");
const validateUser = require("../middleware/validateUser");
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
 *                 $ref: '#/components/schemas/User'
 */
router.get("/", userController.getUsers); // Get all users

/**
 * @swagger
 * /api/users/{uuid}:
 *   get:
 *     summary: Get a user by UUID
 *     description: Retrieves a single user by their unique UUID
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get("/:uuid", userController.getUserById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Adds a new user to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRequest'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 */
router.post("/", validateUser, userController.createUser); // Create a new user

/**
 * @swagger
 * /api/users/{uuid}:
 *   put:
 *     summary: Update a user by UUID
 *     description: Updates a user's details using their UUID
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRequest'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */

router.put("/:uuid", userController.updateUser); // Update a user

/**
 * @swagger
 * /api/users/{uuid}:
 *   delete:
 *     summary: Delete a user by UUID
 *     description: Removes a user from the database using their UUID
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete("/:uuid", userController.deleteUser); // Delete a user

module.exports = router;
