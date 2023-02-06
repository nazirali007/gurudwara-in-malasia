const express = require("express");
const router = express.Router();
const adminDashboardController = require("../../controllers/admin/dashboardController");

router
  .route("/")
  .get(adminAuthController.protect, adminDashboardController.getDashboardData)

module.exports = router;
