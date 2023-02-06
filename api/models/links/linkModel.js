const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const LinkSchema = new mongoose.Schema(
  {
    linkName: {
      type: String,
    },
    linkUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const LiveLinks = mongoose.model("Links", LinkSchema);

module.exports = LiveLinks;
