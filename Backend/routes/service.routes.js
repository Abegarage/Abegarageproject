const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");

router.post("/admin/service", serviceController.createService);

module.exports = router;
