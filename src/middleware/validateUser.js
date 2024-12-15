const { body, validationResult } = require("express-validator");

const validateUser = (isUpdate = false) => {
  return [
    body("name")
      .if(() => !isUpdate)
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .if(() => !isUpdate)
      .notEmpty()
      .withMessage("Email is required")
      .bail()
      .isEmail()
      .withMessage("A valid email is required"),

    body("phone")
      .if(() => !isUpdate)
      .notEmpty()
      .withMessage("Phone number is required")
      .bail()
      .isMobilePhone()
      .withMessage("A valid phone number is required"),

    body("address")
      .if(() => !isUpdate)
      .notEmpty()
      .withMessage("Address is required"),

    body("role")
      .if(() => !isUpdate)
      .notEmpty()
      .withMessage("Role is required")
      .bail()
      .isIn(["admin", "user"])
      .withMessage("Role must be either 'admin' or 'user'"),

    body("bio").optional().isString().withMessage("Bio must be a string"),
    body("image").optional().withMessage("Profile picture must be a valid URL"),

    (req, res, next) => {
      const errors = validationResult(req);
      console.log(errors.array());
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
};

module.exports = validateUser;
