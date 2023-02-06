const express = require('express');
const router = express.Router();
const generalInfo = require('../../controllers/guruDwara/generalInfoController')

router
   .route("/")
   .post(generalInfo.createGeneralInfo )
   .get(generalInfo.getAllInfo);

   router.route("/deleteGeneralInfo/:id").delete(generalInfo.deleteGeneralInfo);


 



   module.exports = router; 