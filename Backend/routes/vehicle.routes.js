// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the vehicle controller
const vehicleController = require("../controllers/vehicle.controller");

// Create a route to handle the add vehicle request on post
router.post("/api/vehicle", vehicleController.createVehicle);
// Create a route to handle the get all vehicles request on get
router.get("/api/vehicles", vehicleController.getAllVehicles);

// Export the router
module.exports = router;
