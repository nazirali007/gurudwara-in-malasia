const Member = require("../../models/executiveMembers/ExecutiveMembers")

exports.createMember = async (req, res) => {
    try {
        const {name, post, mobile} = req.body;
        const data = await Member.create({
            name,
            post,
            mobile
        })
        res.status(200).json({
           status:"Success",
           message:"Member Added Successfully",
           data:data
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getMember = async (req, res) => {
    try {
        const allMember = await Member.find({});
        res.status(200).json({
            status:"Success",
            message:"Get All Member Successfully",
            data:allMember
        })
    } catch (error) {
        console.log(error)
    }
}