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
// A function to add a customer
async function createCustomer(customer) {
  let createdCustomer = {};
  try {
    const query1 =
      "INSERT INTO customer_identifier (customer_email, customer_phone_number) VALUES (?, ?)";
    const rows = await conn.query(query1, [
      customer.customer_email,
      customer.customer_phone_number,
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
    // console.log(customer);
  } catch (err) {
    console.log(err);
  }
  return createdCustomer;
}
// A function to get all customer
async function getAllCustomers() {
  const query =
    "SELECT * FROM customer_identifier INNER JOIN customer_info ON customer_identifier.customer_id = customer_info.customer_id ORDER BY customer_identifier.customer_id ASC limit 10";
  const rows = await conn.query(query);
  return rows;
}

// A function to edit customer
async function updateCustomer(updatedCustomer) {
  try {
    const queryUpdate1 =
      "UPDATE customer_identifier SET customer_phone_number = ? WHERE customer_id = ?";
    const rowsUpdated1 = await conn.query(queryUpdate1, [
      updatedCustomer.customer_phone_number,
      updatedCustomer.customer_id,
    ]);
    // const customer_id = rowsUpdated1.insertId;
    const queryUpdate2 =
      "UPDATE customer_info SET customer_first_name = ?, customer_last_name = ?, active_customer_status = ? WHERE customer_id = ?";
    const rowsUpdated2 = await conn.query(queryUpdate2, [
      updatedCustomer.customer_first_name,
      updatedCustomer.customer_last_name,
      updatedCustomer.active_customer_status,
      updatedCustomer.customer_id,
    ]);
    return rowsUpdated2;
  } catch (err) {
    console.log(err);
  }
}
// A function to delete customer
async function deleteCustomer(deleteCustomer) {
  try {
    const queryDelete1 =
      "DELETE FROM customer_identifier WHERE customer_id = ?";
    const rowsDeleted1 = await conn.query(queryDelete1, [
      deleteCustomer.customer_id,
    ]);

    const queryDelete2 = "DELETE FROM customer_info WHERE customer_id = ?";
    const rowsDeleted12 = await conn.query(queryDelete2, [
      deleteCustomer.customer_id,
    ]);
    return rowsDeleted12;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createCustomer,
  checkIfCustomerExists,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
};
