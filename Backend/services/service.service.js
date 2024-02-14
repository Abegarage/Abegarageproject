const { query } = require("../config/dbConfig");

const servicesDB = [];

async function checkIfServiceExists(serviceName) {
  const existingService = servicesDB.find(
    (service) => service.service_name === serviceName
  );
  return Boolean(existingService);
}

async function addService({ service_name, description }) {
  try {
    // Check if the service already exists
    if (await checkIfServiceExists(service_name)) {
      throw new Error(
        "This service name is already associated with another service!"
      );
    }

    // Execute SQL query to insert the new service into the database
    const sql =
      "INSERT INTO common_services (service_name, service_description) VALUES (?, ?)";
    const params = [service_name, description];
    await query(sql, params);

    // Create the new service
    const newService = { service_name, description };

    // Add the service to the in-memory array
    servicesDB.push(newService);

    // Return the newly added service
    return newService;
  } catch (error) {
    console.error("Error adding service:", error);
    throw error;
  }
}

// Function to retrieve all services from the in-memory array
async function getAllServices() {
  return servicesDB;
}

module.exports = {
  checkIfServiceExists,
  addService,
  getAllServices,
};
