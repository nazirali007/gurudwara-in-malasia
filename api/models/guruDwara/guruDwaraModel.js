const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
  

  const GurudwaraSchema = new mongoose.Schema({
        name:{
            type:String
        },
        email:{
            type:String  
        },
        mobile:{
            type:String
        },
        message:{
            type:String
        }
       



  })

  const Gurudwara = mongoose.model("Gurudwara", GurudwaraSchema);

module.exports = Gurudwara;