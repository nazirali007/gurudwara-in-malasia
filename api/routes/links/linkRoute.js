const express = require("express");
const router = express.Router();
const links = require('../../controllers/admin/liveLinksController');

router
  .route("/")   
  .post(links.addLink)
  .get(links.getLink)
  .delete(links.deleteAllLink);
  router.route("/live-link/:id").get(links.getSingleLink)
  router.route("/delete-link/:id").delete(links.deleteLink)
  router.route("/edit-link/:id").put(links.editLink)


module.exports = router;