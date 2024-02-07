//Import the express module
const express = require("express");
//call the router methode from express to create the router
const router = express.Router();
//Import the login routes
const loginRoutes = require("./login.routes");
//Add the login routes to the main router
router.use(loginRoutes);
//export the router
module.exports = router;
