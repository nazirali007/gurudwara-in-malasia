const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const childrenInfoSchema = new mongoose.Schema({
    name:{
        type:String
    },
    education:{
        type:String
    },
     childrenAddress:{
        type:String
     },
     childrenAge:{
        type:String
     },
     childrenMaritalStatus:{
        type:String
     },
     childrenMobile:{
        type:String
     },
     childrenProfession:{
        type:String
     },
     generalInfo:{
        type: Schema.ObjectId, ref:"GeneralInfo"
    }

})
const ChildrenInfo = mongoose.model("children" , childrenInfoSchema)
module.exports = ChildrenInfo;