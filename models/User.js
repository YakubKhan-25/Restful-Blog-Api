const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required : true,
        unique : true
    },

    password : {
        type: String,
        required : true
    },
    role: {
        type: Number,
        default : 3
    }
}, {timestamps : true});

// const userschema = mongoose.Schema({
//     username : String,
//     email: String,
//     password : String
// },{timestamps : true});

const User = mongoose.model("user", userschema);

module.exports = User