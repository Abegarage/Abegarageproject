//Import the query function from the db.config.js file
const conn = require("../config/db.config");








async function getAllOrders() {
    const query = "SELECT * FROM order INNER JOIN order_info ON order.order_id = order_info.order_id INNER JOIN employee ON order.employee_id = employee_info.employee_id INNER JOIN employee_role ON employee.employee_id = employee_role.employee_id INNER JOIN company_roles ON employee_role.company_role_id = company_roles.company_role_id ORDER BY employee.employee_id DESC limit 10";
    const rows = await conn.query(query);
    return rows;
  }