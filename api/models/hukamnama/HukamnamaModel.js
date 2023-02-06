const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HukamnamaSchema = new mongoose.Schema({
  hukamnamaText: {
    type: String,
  },

  photo: {
    type: String,
  },

  hukamnamaDate: {
    type: String,          
    unique: true,
  },
});

const Hukamnama = mongoose.model("Hukamnama", HukamnamaSchema);

module.exports = Hukamnama;
