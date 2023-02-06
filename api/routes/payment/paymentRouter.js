const express = require("express");
const router = express.Router();
const paymentControl = require("../../controllers/payment/paymentController");

router.route("/payment/verify").post(paymentControl.verifyPayment);

router.route("/payment/create").post(paymentControl.createPayment);

module.exports = router;
