const conn = require("../config/dbConfig");

// Function to create a new vehicle
async function createVehicle(vehicle) {
  try {
    const query =
      "INSERT INTO customer_vehicle_info (customer_id, vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const rows = await conn.query(query, [
      vehicle.customer_id,
      vehicle.vehicle_year,
      vehicle.vehicle_make,
      vehicle.vehicle_model,
      vehicle.vehicle_type,
      vehicle.vehicle_mileage,
      vehicle.vehicle_tag,
      vehicle.vehicle_serial,
      vehicle.vehicle_color,
    ]);

    if (rows.affectedRows !== 1) {
      return {
        status: "fail",
        message: "Failed to add the vehicle!",
      };
    }

    const vehicle_id = rows.insertId;

    return {
      status: "success",
      message: "Vehicle created successfully!",
      vehicle_id: vehicle_id,
    };
  } catch (err) {
    console.error(err);
    return {
      status: "fail",
      message: "Something went wrong!",
    };
  }
}

module.exports = {
  createVehicle,
};
