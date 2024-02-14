// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the employee controller
const employeeController = require("../controllers/employee.controller");
// Import middleware
const authMiddleware = require("../middlewares/auth.middleware");
// Create a route to handle the add employee request on post
<<<<<<< HEAD
router.post("/api/employee", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.createEmployee);

=======
// router.post("/api/employee", [authMiddleware.verifyToken, authMiddleware.isAdmin], employeeController.createEmployee);
router.post("/api/employee", employeeController.createEmployee);
>>>>>>> 88f531093e44d3f574ab003dfc4e5ad6ebc2931c
// Create a route to handle the get all employees request on get
router.get(
  "/api/employees",
  [authMiddleware.verifyToken, authMiddleware.isAdmin],
  employeeController.getAllEmployees
);
// router.get("/api/employees", employeeController.getAllEmployees);
// Export the router
module.exports = router;
