const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
  

  const EventSchema = new mongoose.Schema({
        eventName:{
            type:String
        },
        eventDate:{
            type:String  
        },
        month:{
          type:String
        },
        year:{
          type:String
        }

  })

  const Event = mongoose.model("Event", EventSchema);

module.exports = Event;