const mongoose  = require("mongoose")

const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true     
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    placeOfBirth:{type:String,
        required:true },
    placeOfResidence:{
        type:String,
        required:true 
    },
    phoneNumber:{
        type:Number,
        required:true 
    }
})

const Member = mongoose.Model("Member",memberSchema)
module.exports = Member