const { body, validationResult } = require("express-validator");

exports.validateSchool = [
  body("name").notEmpty().withMessage("Name is required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("latitude").isFloat().withMessage("Latitude must be a float"),
  body("longitude").isFloat().withMessage("Longitude must be a float"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
