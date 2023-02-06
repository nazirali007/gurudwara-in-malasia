const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const addAkhandPathRegSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    mobile:{
        type:String,
    },
    date:{
        type:String,
    },
    time:{
         type:String,
    },
    purpose:{
        type:String,
    }
    
})        

const AkhandPathReg = mongoose.model("AkhandPathReg", addAkhandPathRegSchema);
module.exports = AkhandPathReg;
