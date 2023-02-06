const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const generalInfoSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    education:{
        type:String,
    },
    address:{
        type:String,
    },
    age:{
        type:String,
    },
    maritalStatus:{
        type:String,
    },
    mobile:{
        type:String,
    },
    profession:{
        type:String,
    },
    children:[{
        type: Schema.ObjectId, ref:"children"
    }]


})
const GeneralInfo = mongoose.model("GeneralInfo" , generalInfoSchema)
module.exports = GeneralInfo;
