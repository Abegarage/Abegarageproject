//create the order controller
const orderService = require('../services/order.service');

//create the createOrder controller
async function createOrder(req, res, next) {

  //check if order exists by the order hash
  const orderExists = await orderService.checkIfOrderExists(req.body.order_hash);
  if(orderExists) {
    res.status(400).json({
      error: "This order already exists!"
    });
  } else {
    try {
      const orderData = req.body;
      //create the order
      const order = await orderService.createOrder(orderData);
      if (!order) {
        res.status(400).json({
          error: "Failed to add the order!"
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

module.exports = {
  createOrder
}