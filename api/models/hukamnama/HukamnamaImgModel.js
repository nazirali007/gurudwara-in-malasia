const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HukamnamaImgSchema = new mongoose.Schema({
  hukamnamaImgName: {
    type: String,
  },
  
  img:{
    data: Buffer,
    contentType: "image/png",
  }
});

const HukamnamaImg = mongoose.model("HukamnamaImg", HukamnamaImgSchema);

module.exports = HukamnamaImg;
        