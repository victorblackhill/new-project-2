const {Schema,model}= require("mongoose")
const mongoose = require("mongoose")
require('mongoose-type-email');

userSchema = new Schema({
    email:{
        type:mongoose.SchemaTypes.Email,
        unique:true
    },
    password:String
})

const UserModel = model("users",userSchema)

module.exports = UserModel