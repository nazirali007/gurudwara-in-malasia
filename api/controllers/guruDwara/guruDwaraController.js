const Gurudwara = require('./../../models/guruDwara/guruDwaraModel');


exports.contactUsCreate = async (req, res) => {
    try {
        const {name, email, mobile, msg} = req.body;
        const data = await Gurudwara.create({
            name, email, mobile, message:msg
        })
        res.status(200).json({
            status:"success",
            message: "Created Successfully",
            data: data
        })
    
    } catch (error) {
        console.log(error)
    }

}


exports.getContactData = async (req, res) => {
    try {
        // console.log(req.body)
        const data = await Gurudwara.find()
        res.status(200).json({
            status:"success",
            data: data
        })
        // console.log(data)
        
        
    } catch (error) {
        console.log(error)
    }

}

exports.deleteContact = async (req, res) => {
    try {
const {id} = req.params;
await Gurudwara.findByIdAndDelete(id)
res.status(200).json({
    status: "Success",
    message: "Contact detail deleted"
})
    } catch (error) {
        console.log(error)
    }
}