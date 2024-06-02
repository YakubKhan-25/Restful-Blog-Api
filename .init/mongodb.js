const mongoose = require('mongoose');
const { connectionurl } = require('../config/keys');

const connection = async ()=>{
    try{
        await mongoose.connect(connectionurl);
        console.log("database connected successfully");
    }catch(err){
        console.log("something went wrong");
    }
}

module.exports = connection;