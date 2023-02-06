const LiveLink = require("../../models/links/linkModel");

exports.addLink = async (req, res) => {
  try {
    const { linkName, linkUrl } = req.body;
    const data = await LiveLink.create({
      linkName,
      linkUrl,
    });

    res.status(200).json({
      status: "success",
      message: "Created Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteLink = async (req, res) => {
  try {
    const { id } = req.params;
    await LiveLink.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Link Deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteAllLink = async (req, res) => {
  try {
    const { id } = req.params;
    await LiveLink.deleteMany({});
    res.status(200).json({
      status: "success",
      message: "Link Deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getLink = async (req, res) => {
  try {
    const allLinks = await LiveLink.find({});
    res.status(200).json({
      status: "success",
      message: "Get All Events Successfully",
      data: allLinks,
    });
  } catch (error) {
    console.log("error", error);
  }
};
 
exports.getSingleLink = async (req, res) => {
  try {
    const {id} = req.params;
    const allLinks = await LiveLink.findById(id);
    res.status(200).json({
      status: "success",
      message: "Get All Events Successfully",
      data: allLinks,
    });
  } catch (error) {
    console.log("error", error);
  }
};
exports.editLink = async (req, res) => {
  // try {
    const { id } = req.params;
    const { linkName, linkUrl } = req.body;
    console.log("dffdfd",req.body)
    await LiveLink.findByIdAndUpdate(id, {
      linkName,
      linkUrl,
    });
    res.status(200).json({
      status: "Success",
      message: "Links are Successfully updated",
    });
  // } catch (error) {
  //   console.log(error);
  // }
};
