const conn = require("../config/dbConfig");
const bcrypt = require("bcrypt");

async function checkIfCustomerExists(email) {
  const query = "SELECT * FROM customer_identifier WHERE customer_email = ? ";
  const rows = await conn.query(query, [email]);
  //   console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}

async function createCustomer(customer) {
  let createdCustomer = {};
  try {
    const query1 =
      "INSERT INTO customer_identifier (customer_email, customer_phone_number, customer_hash) VALUES (?, ?, ?)";
    const rows = await conn.query(query1, [
      
      customer.customer_email,
      customer.customer_phone_number,
      customer.customer_hash
    ]);
    if (rows.affectedRows !== 1) {
      return false;
    }

    const customer_id = rows.insertId;
    // console.log(rows);
    const query2 =
      "INSERT INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer_status) VALUES (?, ?, ?, ?)";
    const rows2 = await conn.query(query2, [
      customer_id,
      customer.customer_first_name,
      customer.customer_last_name,
      customer.active_customer_status,
    ]);

    createdCustomer = {
      customer_id: customer_id,
    };
    console.log(customer);
  } catch (err) {
    console.log(err);
  }
  return createdCustomer;
}

module.exports = {
  createCustomer,
  checkIfCustomerExists,
};
