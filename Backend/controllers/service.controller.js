// serviceController.js

const express = require("express");
const router = express.Router();
const serviceService = require("../services/service.service");

// Create the add service controller
async function createService(req, res, next) {
  try {
    const { service_name, description } = req.body;

    // Check if the service name already exists
    const serviceExists = await serviceService.checkIfServiceExists(
      service_name
    );

    if (serviceExists) {
      return res.status(400).json({
        error: "This service name is already associated with another service!",
      });
    }

    // Create the service
    const newService = await serviceService.addService({
      service_name,
      description,
    });

    if (!newService) {
      return res.status(400).json({
        error: "Failed to add the service!",
      });
    }

    return res.status(200).json({
      status: "success",
      data: newService,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong!",
    });
  }
}

// Export the createService controller
module.exports = {
  createService,
};
