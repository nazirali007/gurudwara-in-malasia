const express = require("express");
const router = express.Router();
const member = require('../../controllers/admin/adminExecutiveMemberController');

router
  .route("/")
  .post(member.createMember)
  .get(member.getMember);




module.exports = router;