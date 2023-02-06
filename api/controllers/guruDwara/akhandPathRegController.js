const AkhandPathReg = require("../../models/guruDwara/akhandPathRegModel");

exports.createAkhandPathReg = async (req, res) => {
try {
    const {name, mobile, date, time, purpose} = req.body;
    const data = await AkhandPathReg.create({
        name, mobile, date, time, purpose
    })
    res.status(200).json({
        status:'Success',
        message: "Akhand Path Added Successfully ",
        data:data,
    })
} catch (error) {
    console.log(error)
}
}
exports.getAkhandPathReg = async(req, res) => {
   try {
    const allAkhandPathReg = await AkhandPathReg.find({})
    res.status(200).json({
        status:"Success",
        message:"Get All Akhand Path Booking Successfully",
        data:allAkhandPathReg
    })
   } catch (error) {
    console.log(error)          
   }
}

exports.deleteAkhandPathReg = async(req, res) => {
    try {
        const {id} = req.params;
        await AkhandPathReg.findByIdAndDelete(id);
        res.status(200).json({
            status:"Success",
            message:"Akhand Path Detail Deleted"
        })
    } catch (error) {
        console.log(error)
        
    }
}