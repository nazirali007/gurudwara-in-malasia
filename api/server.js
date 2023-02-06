require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require('morgan')
const path = require("path");
var cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const adminAuthRouter = require("./routes/admin/adminAuthRouter");
const guruDwaraRouter = require("./routes/guruDwara/guruDwaraRouter");
const allGuruDwaraRouter = require("./routes/guruDwara/allGurudwaraRouter");
const events = require("./routes/event/eventRoute");
const links = require("./routes/links/linkRoute");
const college = require("./routes/college/collegeRoute");
const member = require("./routes/members/Member");
const donation = require("./routes/donation/donationRoute");
const akhandPathReg = require("./routes/akhandPathReg/akhandPathRegRoute");
const feedback = require("./routes/feedback/feedbackRoute");
const generalInfo = require("./routes/generalInfo/generalInfoRoute");
const paymentRouter = require("./routes/payment/paymentRouter");
const hukamnama = require("./routes/hukamnama/hukamnamaRoute");
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((e) => {
    console.log(`SomeThing went wrong with DataBase. and the error is =  ${e}`);
  });

app.use(cors());
app.use(morgan('dev'))

// app.get("/", (req, res) => res.send("<h1>Server is running</h1>"));
app.use(express.static(path.join(__dirname, "build")));

// admin routers
app.use("/api/v1", paymentRouter);
app.use("/api/v1/admin", adminAuthRouter);
app.use("/api/v1/gurudwara", guruDwaraRouter);
app.use("/api/v1/events", events);
app.use("/api/v1/links", links);
app.use("/api/v1/college", college);  
app.use("/api/v1/members", member);
app.use("/api/v1/allGurudwara", allGuruDwaraRouter);
app.use("/api/v1/donation", donation);
app.use("/api/v1/akhandPathReg", akhandPathReg);
app.use("/api/v1/feedback", feedback);
app.use("/api/v1/generalInfo", generalInfo);
app.use("/api/v1/hukamnama", hukamnama);
app.use("/api/v1/image", express.static("public/image"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});
app.post("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});

app.delete("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});

app.patch("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});
app.put("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server is running on port ${port}!`));
