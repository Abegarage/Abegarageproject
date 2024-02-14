 //import the vehicle service
 const vehicleService =require('../services/vehicle.service');

 // Create the add vehicle controller 
 async function createVehicle(req, res, next) {
  // Check if vehicle model already exists in the database 
  const vehicleExists = await vehicleService.checkIfVehicleExists(req.body.vehicle_model);
  
  // If vehicle exists, send a response to the client
  if (vehicleExists) {
    res.status(400).json({
      error: "This vehicle model is already associated with another vehicle!"
    });
  } else {
    try { 
      const vehicleData = req.body;
      
      // Create the vehicle
      const vehicle = await vehicleService.createVehicle(vehicleData);
      if (!vehicle) {
        res.status(400).json({
          error: "Failed to add the vehicle!"
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(err);
      res.status(400).json({
        error: "Something went wrong!"
      });
    } 
  }
}
 
 // Export the createVehicle controller 
 module.exports = {
  createVehicle
 }