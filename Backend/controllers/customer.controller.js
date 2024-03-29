const customerService = require("../services/customer.service");

async function createCustomer(req, res, next) {
  const customerExists = await customerService.checkIfCustomerExists(
    req.body.customer_email
  );
  if (customerExists) {
    res.status(400).json({
      error: "This email address is already associated with another employee!",
    });
  } else {
    try {
      const customerData = req.body;
      const customer = await customerService.createCustomer(customerData);
      if (!customer) {
        res.status(400).json({
          error: "Failed to add the Customer!",
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(err);
      res.status(400).json({
        error: "Something went wrong!",
      });
    }
  }
}
// Create the getAllCustomers controller
async function getAllCustomers(req, res) {
  // Call the getAllCustomers method from the customers service
  const customer = await customerService.getAllCustomers();
  // console.log(customer);
  if (!customer) {
    res.status(400).json({
      error: "Failed to get all customers!",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: customer,
    });
  }
}
module.exports = {
  createCustomer,
  getAllCustomers,
};
