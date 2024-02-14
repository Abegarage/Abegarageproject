//Import the express module
const express = require('express');
//Create an express router
const router = express.Router();
//Import the order controller
const orderController = require('../controllers/order.controller');
//Create a route to handle the order creation
router.post('/api/order', orderController.createOrder);
//Create a route to handle the get all orders request on get
router.get('/api/orders', orderController.getAllOrders);
//Export the router
module.exports = router;