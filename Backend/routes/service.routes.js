 //improt the express module 
 const express = require('express');

 //Call the router method from express to create the router
 const router = express.Router();

 //import the service controller
 const serviceController = require('../controllers/service.controller');

 //Create a route to handle the add service request on post
 router.post("/api/add_service", serviceController.createService);

 //Export the router
 module.exports = router;