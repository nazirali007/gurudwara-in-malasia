const express = require("express");
const router = express.Router();
const feedback = require('../../controllers/guruDwara/feedbackController');

router
  .route("/")
  .post(feedback.createFeedback)
  .get(feedback.getFeedback);

  router.route("/deleteFeedback/:id").delete(feedback.deleteFeedback)




module.exports = router;