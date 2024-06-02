const express = require('express');
const router = express.Router();
const {authcontroller} = require('../controllers')
const { signupvalidator } = require('../validators/auth')
const { validate } = require('../validators/validate')

router.get('/',(req, res)=>{
    res.render('index')
})

router.post('/signup', signupvalidator , validate, authcontroller.signup);

module.exports = router;