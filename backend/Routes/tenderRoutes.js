const express = require("express");
const router = express.Router();

const verifyJWT = require("../middleware/jwtAuth");  // Assuming JWT middleware is required
const tenderController = require("../controllers/tenderControllers.js");

router.get("/", tenderController.getAllTenders);
router.get("/location/:location", tenderController.searchByLocation);

module.exports = router;