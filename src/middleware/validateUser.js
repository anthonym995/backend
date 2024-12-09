// middleware/validateUser.js
const { body, validationResult } = require("express-validator");

const validateUser = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("A valid email is required"),
  body("phone").isMobilePhone().withMessage("A valid phone number is required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("role")
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["Admin", "User"])
    .withMessage("Role must be either 'Admin' or 'User'"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateUser;
