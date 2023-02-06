const mongoose = require("mongoose"),
Schema = mongoose.Schema;

const collegeSchema = new mongoose.Schema({
    collegeName:{
         type:String
    },
    collegeUrl:{
        type:String
    }
})

const College = mongoose.model("College", collegeSchema);
module.exports = College;