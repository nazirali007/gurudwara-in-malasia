const AddGurudwara = require("../../models/guruDwara/addGurudwaraModel");

exports.createGurudwara = async (req, res) => {
    try {
        const {gurudwaraName, gurudwaraUrl} = req.body;
        const data = await AddGurudwara.create({
            gurudwaraName,
            gurudwaraUrl
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

exports.getAllGurudwara = async (req, res) => {
    try {
        const allGurudwara = await AddGurudwara.find({});
        res.status(200).json({
            status:"Success",
            message:"Get All Gurudwara Successfully",
            data:allGurudwara
        })
    } catch (error) {
        console.log(error)
    }
}