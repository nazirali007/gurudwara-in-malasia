const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
  },
 
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  feedback: {
    type: String,
  },
  
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
