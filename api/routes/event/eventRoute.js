const express = require("express");
const router = express.Router();
const events = require('../../controllers/admin/adminEventsController');

router
  .route("/")   
  .post(events.createEvent)
  .get(events.getEvent);
  router.route("/month").post(events.getEventByMonth)
  router.route("/current/month").get(events.getEventByCurrentMonth)
  router.route("/delete-event/:id").delete(events.deleteEvent)
  router.route("/edit-event/:id").post(events.editEvent)





module.exports = router;