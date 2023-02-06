const Feedback = require("../../models/guruDwara/feedbackModel");

exports.createFeedback = async (req, res) => {
try {
    const {name, mobile, email, feedback} = req.body;
    const data = await Feedback.create({
        name, mobile, email, feedback
    })
    res.status(200).json({
        status:'Success',
        message: "Feedback Added Successfully ",
        data:data,
    })
} catch (error) {
    console.log(error)
}
}
exports.getFeedback = async(req, res) => {
   try {
    const allFeedback = await Feedback.find({})
    res.status(200).json({
        status:"Success",
        message:"Get All Akhand Path Booking Successfully",
        data:allFeedback
    })
   } catch (error) {
    console.log(error)          
   }
}

exports.deleteFeedback = async (req, res) => {
    try {
      const {id} = req.params;
      await Feedback.findByIdAndDelete(id)
      res.status(200).json({
        status:"Success",
        message:"Feedback Deleted"
      })
    } catch (error) {
        console.log(error)
    }
}