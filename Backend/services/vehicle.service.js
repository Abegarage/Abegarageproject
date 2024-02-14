 // import the query function from the db,config.js file 
 const conn = require('../config/db.config');

 async  function checkIfVehicleExists(vehicle_model)
 {
  const query = "SELECT * FROM customer_vehicle_info WHERE vehicle_model =?";
  const rows = await conn.query(query, [vehicle_model]);
  console.log(rows);
  if (rows.length > 0) {
    console.log(rows);
    return true;
  }
  return false;
 }
 

  // Rest of the code using the customerId variable
  // ...

 // Afunction to create a new vehicle information 
 async function createVehicle(vehicle) {
  let createdVehicle = {};
  try {

    
    const customerId = 1 //should be fetched from databases using customer email
  
    // Insert the vehicle model in to the customer_vehicle_info table  
    const query2 = "INSERT INTO customer_vehicle_info (customer_id, vehicle_year,vehicle_make,vehicle_model,vehicle_type,vehicle_mileage,vehicle_tag,vehicle_serial,vehicle_color) VALUES (?,?,?,?,?,?,?,?,?)";
    const rows = await conn.query(query2, [customerId,vehicle.vehicle_year, vehicle.vehicle_make, vehicle.vehicle_model, vehicle.vehicle_type, vehicle.vehicle_mileage, vehicle.vehicle_tag, vehicle.vehicle_serial, vehicle.vehicle_color]);
    createdVehicle = {
      vehicle_id: rows.insertId
    }
  }
  catch (err) {
    console.log(err);
  }
  // Return the vehicle object
  return createdVehicle;
}
module.exports=
{
  checkIfVehicleExists,
  createVehicle,
  // getCustomerByEmail
}   