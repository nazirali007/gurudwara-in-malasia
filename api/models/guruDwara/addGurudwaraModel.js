const mongoose = require("mongoose"),
Schema = mongoose.Schema;

const addGurudwaraSchema = new mongoose.Schema({
    gurudwaraName:{
         type:String
    },
    gurudwaraUrl:{                    
        type:String
    }
})

const AddGurudwara = mongoose.model("AllGurudwara", addGurudwaraSchema);
module.exports = AddGurudwara;