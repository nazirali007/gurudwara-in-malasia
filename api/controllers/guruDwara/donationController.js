const Donation = require("../../models/guruDwara/donationModel");

exports.createDonation = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      address,
      donationType,
      donationAmount,
      panNumber,
      remark,
      razorpaySignature,
      razorpayPaymentId,
      razorpayOrderId,
    } = req.body;
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;

    const data = await Donation.create({
      name,
      email,
      mobile,
      address,
      donationType,
      donationAmount,
      panNumber,
      date,
      remark,
      razorpaySignature,
      razorpayPaymentId,
      razorpayOrderId,
    });
    res.status(200).json({
      status: "Success",
      message: "Donation Details Added Successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getDonation = async (req, res) => {
  try {
    const allDonation = await Donation.find({});
    res.status(200).json({
      status: "Success",
      message: "Get All Donation Successfully",
      data: allDonation,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDonationReceipt = async (req, res) => {
  try {
    const {id} = req.params;
    const donationPreview = await Donation.findById(id)
    res.status(200).json({
      status:'Success',
      message:'Donation Details',
      data:donationPreview,
    })
  } catch (error) {
    
  }
}

exports.deleteDonaties = async (req, res) => {
try {
  const {id} = req.params;
  await Donation.findByIdAndDelete(id)
  res.status(200).json({
    status:"Success",
    message:"Doner Deleted"
  })
} catch (error) {
  console.log(error)
}
}
