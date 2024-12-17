

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:String,

    password:Number

})
const user = mongoose.model('user' , userSchema )
module.express = user 