const {User} = require('../models')
const express = require('express')
const a = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


a.use(cookieParser());

const signup = async (req, res, next)=>{
    try{
        // res.code = 404
        // throw new err("test err");

        const {username, email, password} = req.body;

        const newuser =await User.findOne({email});

        if(newuser){
           return res.status(201).json("user already exists")
        }

        console.log('Received data:', { username, email, password });

        if (!username) {
            res.code = 400;
            throw new Error("name is required")
        }
        if (!email) {
            res.code = 400;
            throw new Error("email is required")
        }
        if (!password) {
            res.code = 400;
            throw new Error("password is required")
        }

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash){

                const newuser = new User({
                    username,
                     email,
                     password: hash
                });
                await newuser.save();
                const token = jwt.sign({email: email}, "yk25");
                res.cookie("token", token);
                res.redirect('/');
            })
        })
        

        // await newuser.save();

        // res.status(201).json({code: 201, status: true, message : "user registration successfull"})
        
    }catch(err){
        next(err);
    }
}

module.exports = { signup }