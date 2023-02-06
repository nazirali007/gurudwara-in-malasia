const express = require('express');
const router = express.Router();
const addAkhandPathReg = require("../../controllers/guruDwara/akhandPathRegController");


router 
   .route("/")
   .post(addAkhandPathReg.createAkhandPathReg)
   .get(addAkhandPathReg.getAkhandPathReg);
  
  
 router.route("/deleteAddAkhandPathReg/:id").delete(addAkhandPathReg.deleteAkhandPathReg)

   module.exports = router;   