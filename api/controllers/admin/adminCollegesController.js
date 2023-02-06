const College = require("../../models/college/collegeModel");

exports.createCollege = async (req, res) => {
    try {
        const {collegeName, collegeUrl} = req.body;
        const data = await College.create({
            collegeName,
            collegeUrl
        })
        res.status(200).json({
            status:"Success",
            message:"Created Successfully",
            data:data
    
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getCollege = async (req, res) => {
    try {
        const allCollege = await College.find({});
        res.status(200).json({
            status:"Success",
            message:"Get All College Successfully",
            data:allCollege
        })
    } catch (error) {
        console.log(error)
    }
}