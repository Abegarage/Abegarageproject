// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the customer controller
const customerController = require("../controllers/customer.controller");
// Import middleware
const authMiddleware = require("../middlewares/auth.middleware");
// Create a route to handle the add customer request on post
router.post("/api/customer", customerController.createCustomer);
// Create a route to handle the get all customer request on get
router.get("/api/customers", customerController.getAllCustomers);

module.exports = router;
