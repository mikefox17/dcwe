const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

//@route Get api/users
//@desc Register User
//@access Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password is required with a length of 6 characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("USERS ROUTE...");
  }
);

module.exports = router;
