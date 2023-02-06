const express = require("express");
const router = express.Router();
const guruDwara = require("../../controllers/admin/adminGurudwaraController");

router 
   .route("/")
   .post(guruDwara.createGurudwara)
   .get(guruDwara.getAllGurudwara);
  
module.exports = router;