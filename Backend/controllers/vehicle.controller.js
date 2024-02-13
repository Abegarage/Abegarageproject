// Import the vehicle service
const vehicleService = require("../services/vehicle.service");

// Create the add vehicle controller
async function createVehicle(req, res, next) {
  try {
    const vehicleData = req.body;
    // Call the createVehicle method from the vehicle service
    const vehicle = await vehicleService.createVehicle(vehicleData);
    if (!vehicle) {
      res.status(400).json({
        error: "Failed to add the vehicle!",
      });
    } else {
      res.status(200).json({
        status: "true",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

// Create the get all vehicles controller
async function getAllVehicles(req, res, next) {
  // Call the getAllVehicles method from the vehicle service
  const vehicles = await vehicleService.getAllVehicles();
  if (!vehicles) {
    res.status(400).json({
      error: "Failed to get all vehicles!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: vehicles,
    });
  }
}

// Export the controllers
module.exports = {
  createVehicle,
  getAllVehicles,
};
