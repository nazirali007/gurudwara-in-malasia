const express = require("express");
const router = express.Router();
const college = require("../../controllers/admin/adminCollegesController");

router 
   .route("/")
   .post(college.createCollege)
   .get(college.getCollege);
  
module.exports = router;