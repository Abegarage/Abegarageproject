 // Import the express module
 const express = require('express');

 // Call the router method from express to create the router
 const router = express.Router();
 const orderController = require('../controllers/order.controller');
 
 router.post("/api/add_order", orderController.createOrder);
 
 module.exports = router