const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addDonationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  donationType: {
    type: String,
  },
  donationAmount: {
    type: String,
  },
  panNumber: {
    type: String,
  },
  remark: {
    type: String,
  },
  date: {
    type: String,
  },
  isDonated: {
    type: Boolean,
    default: true,
  },
  razorpaySignature: {
    type: String,
  },

  razorpayPaymentId: {
    type: String,
  },
  razorpayOrderId: {
    type: String,
  },
});

const AddDonation = mongoose.model("AddDonation", addDonationSchema);
module.exports = AddDonation;
