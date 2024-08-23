const express = require("express");
const router = express.Router();

const verifyJWT = require("../middleware/jwtAuth");  // Assuming JWT middleware is required
const tenderController = require("../controllers/tenderControllers.js");

router.get("/", tenderController.getAllTenders);
router.get("/location/:location", tenderController.searchByLocation);
router.get("/organisation/:organisation",tenderController.searchByOrganisation);
router.get("/classification/:classification",tenderController.searchByClassification);
router.get("/archive/:tenderId",tenderController.searchById);
router.get("/status/:status",tenderController.searchByStatus);
router.get("/current/:filter",tenderController.searchByCancelStatus);
router.get("/name/:name",tenderController.searchByName);
router.get("/latest", tenderController.getLatestTender);

router.post("/create",tenderController.createTender);

module.exports = router;