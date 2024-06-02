const { check } = require('express-validator');

const signupvalidator = [
    check("username").notEmpty().withMessage("Name is Required"),
    check("email").isEmail().withMessage("Invalid Email").notEmpty().withMessage("Email is Required"),
    check("password").notEmpty().withMessage("Password is Required")
]

module.exports = { signupvalidator }