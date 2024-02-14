// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the install router
// const installRouter = require('./install.routes');
// Import the employee routes
const employeeRouter = require("./employee.routes");
// Import the login routes
const loginRoutes = require("./login.routes");
// Import the Customer routes
const customerRouter = require("./customer.routes");
// Add the install router to the main router
// router.use(installRouter);
// Add the employee routes to the main router
router.use(employeeRouter);
// Add the login routes to the main router
router.use(loginRoutes);
// Add the Customer routes to the main router
router.use(customerRouter);
// Export the router

//Import the services routes  
const serviceRoutes = require("./service.routes");
router.use(serviceRoutes);

//Import the vehicle routes
const vehicleRouter = require("./vehicle.routes");
router.use(vehicleRouter);

//Import the order routes
const orderRouter = require("./order.routes");
router.use(orderRouter);
module.exports = router;
