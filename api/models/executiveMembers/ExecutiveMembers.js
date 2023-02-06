const mongoose = require("mongoose");
 Schema = mongoose.Schema;

 const memberSchema = new mongoose.Schema({
name:{
    type:String
},
post:{
    type:String
},
mobile:{
    type:String
}
 })
 const Member = mongoose.model("Member", memberSchema)
 module.exports = Member;