const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

router.post("/api/customer", customerController.createCustomer);

module.exports = router;
