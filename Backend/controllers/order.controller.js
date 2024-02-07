//Import the order service to handle communication with the database
const orderService = require('../services/order.service');
//create a function to handle the order creation
async function createOrder(req, res, next) {
   //Call the order service to create the order
        const order = await orderService.createOrder(req.body);

    //check if the order was successfully created or not
    if(order.status === 200)
    {
        //If the order was successfully created
        res.status(200).json({message: order.message});
    }
    else
    {
        //If the order was not successfully created
        res.status(500).json({message: order.message});
    }
}
//create a function to handle the get all orders request on get
async function getAllOrders(req, res, next) {
    //Call the order service to get all orders
    const orders = await orderService.getAllOrders();
    //check if the orders were successfully retrieved or not
    if(!orders)
    {
        //If the orders were not successfully retrieved
        res.status(400).json({error:"failed to retrieve orders"});
        
    }
    else
    {
         //If the orders were successfully retrieved
         res.status(200).json({
            status:"success",
            data:orders});
    }
}
//Export the function
module.exports = {
  createOrder,
  getAllOrders
};