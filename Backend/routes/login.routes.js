//Import the express module
const express = require("express");
//call the router method from express to crate the router
const router = express.Router();
//Import the login controller
const logincontrollers = require("../controllers/login.controller");
//create a route to handle the login request on post
router.post("/api/employee/login", logincontrollers.logIn);
//export the router
module.exports = router;
