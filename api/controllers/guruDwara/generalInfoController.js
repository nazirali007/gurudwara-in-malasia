const GeneralInfo = require("../../models/guruDwara/generalInformationModel");
const Children = require("../../models/guruDwara/childrenModel");
const { findByIdAndDelete } = require("../../models/admin/adminModel");

exports.createGeneralInfo = async (req, res) => {
  try {
    const {
      parentInfo,
      child
    } = req.body;
    const {name,
      email,
      education,
      address,
      age,
      maritalStatus,
      mobile,
      profession,} = parentInfo;
    

    const data = await GeneralInfo.create({
      name,
      email,
      education,
      address,
      age,
      maritalStatus,
      mobile,
      profession,
    });
    const parent = await GeneralInfo.findById(data._id)
    
    for (let index = 0; index < child.length; index++) {
      const element = child[index];
      const {name,
      education,
      address,
      childAge,
      maritalStatus,
      mobile,
      childProfession, } = element
      const childData = await Children.create({
        name,
      education,
      address,
      childAge,
      maritalStatus,
      mobile,
      childProfession,
      generalInfo:parent._id
      })
      parent.children.push(childData._id)
      
    }
    await parent.save()
    res.status(200).json({
      status: "Success",
      message: "Information Added Successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllInfo = async (req, res) => {
  try {
    const allInfo = await GeneralInfo.find({}).populate("children");
    res.status(200).json({
      status: "Success",
      message: "All General Information",
      data: allInfo,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteGeneralInfo = async (req, res) => {
  try {
    const {id} = req.params;
    const data = await GeneralInfo.findById(id)
    // console.log(data)
   
    data.children
   await Children.deleteMany({generalInfo:id})
   await GeneralInfo.findByIdAndDelete(id)
   res.status(200).json({
    status:"success",
    message:"Deleted Successfully"
   })
  } catch (error) {
    console.log(error)
  }
}
