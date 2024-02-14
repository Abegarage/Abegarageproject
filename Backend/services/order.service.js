 //Import the query function from the db.config file
 const conn = require("../config/db.config");

 //import the bcrypt module 
 const bcrypt = require("bcrypt");

 // A function to check if order exists in the database
async function checkIfOrderExists(order_hash)
{
  const query = "SELECT * FROM orders WHERE order_hash = ? ";
  const rows = await conn.query(query, [order_hash]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}
 
// a function to create a new orders
async function createOrder(order) {
  let createdOrder = {};
  try {
      const employee_id = 1;
      const customer_id = 1;
      const vehicle_id = 2;
    //insert the remaining data into the orders 
    const query = "INSERT INTO orders (employee_id, customer_id, vehicle_id, active_order, order_hash) VALUES (?, ?, ?, ?, ?)";
    const rows = await conn.query(query, [employee_id, customer_id, vehicle_id, order.active_order, order.order_hash]);

    console.log(rows);
    if (rows.affectedRows !== 1) {
      return false;
    }
    // Get the employee id from the insert 
    const order_id  = rows.insertId;

    console.log("order_id",order_id);
    // Insert the remaining data in to the order_info, order_services, and order_status tables
    const query2 = "INSERT INTO order_info (order_id, order_total_price,  additional_request, notes_for_internal_use, notes_for_customer, additional_requests_completed ) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const rows2 = await conn.query(query2, [order_id, order.order_total_price, order.additional_request, order.notes_for_internal_use, order.notes_for_customer, order.additional_request_completed]);

    const service_id = 1;
    const query3 = "INSERT INTO order_services (order_id, service_id, service_completed) VALUES (?, ?, ?)";
    const rows3 = await conn.query(query3, [order_id, service_id, order.service_completed]);

    const query4 = "INSERT INTO order_status (order_id, order_status) VALUES (?, ?)";
    const rows4 = await conn.query(query4, [order_id, order.order_status]);

    // construct to the employee object to return
    createdOrder = {
      order_id: order_id 
    }
}
catch(err)
{
console.error(err);

}
return createOrder;
}

module.exports = {
  checkIfOrderExists,
  createOrder
}