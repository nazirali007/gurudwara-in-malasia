const express = require("express");
const router = express.Router();
const adminAuthController = require("../../controllers/admin/adminAuthController");
const adminDashboard = require("../../controllers/admin/dashboardController")

router
  .route("/")
  .get(adminAuthController.protect, adminAuthController.dashboard)
  .post(adminAuthController.adminLogin)
  .patch(adminAuthController.changePassword);

router
  .route("/forget/password")
  .post(adminAuthController.forgetPassword)
  .put(adminAuthController.changePasswordOTP)
  .patch(adminAuthController.changePassword);

  router
  .route("/dashboard")
  .get(adminDashboard.getDashboardData)

  router.route("/logout").get(adminAuthController.logOut)

module.exports = router;
