const express = require("express");
const router = express.Router();
const guruDwara = require('../../controllers/guruDwara/guruDwaraController');

router
  .route("/contact")
  .post(guruDwara.contactUsCreate)
  .get(guruDwara.getContactData);
router.route("/deleteContactDetail/:id").delete(guruDwara.deleteContact)
              


module.exports = router;