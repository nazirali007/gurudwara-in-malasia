const express = require('express');
const router = express.Router();
const donation = require('../../controllers/guruDwara/donationController')

router
  .route("/")
  .post(donation.createDonation)
  .get(donation.getDonation);

  router.route("/deleteDonaties/:id").delete(donation.deleteDonaties)
  router.route("/donationDone/:id").get(donation.getDonationReceipt)

  module.exports = router;
   