 //import the express module
const express = require('express');

//Call the router method from express to create the router
const router = express.Router();

//Import the vehicle controller
const vehicleController = require('../controllers/vehicle.controller');

//Create a route to handle the add vehicle request on post
router.post("/api/add_vehicle", vehicleController.createVehicle);

//Export the router
module.exports = router;