const express = require("express");
const router = express.Router();
const hukamnama = require('../../controllers/admin/hukamnamaController');

router
  .route("/")
  .post(hukamnama.createHukamnama)
 
  .get(hukamnama.getHukamnamaByCurrentDate);

router.route("/allHukamnama").get(hukamnama.getHukamnama);
router.route("/editHukamnama/:id").post(hukamnama.editHukamnama)
router.route("/deleteHukamnamaById/:id").delete(hukamnama.deleteSingleHukamnama)  

router
  .route("/create/image/hukamnama/:hukamnamaId")
  .post(
    hukamnama.uploadImage,
    hukamnama.uploadHukamnamaImage
  );


module.exports = router;              