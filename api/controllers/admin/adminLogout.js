exports.logOut = async (req, res) => {
  try {
    console.log("logOut");

    res
      .status(200)
      .clearCookie("bearerToken")
      .json({ message: "Logout successfully", status: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};