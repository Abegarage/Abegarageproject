//Import the login service
const loginService = require("../services/login.service");
//Import the jsonwebtoken module
const jwt = require("jsonwebtoken");
// Import the secret key from the environment variables
const jwt = process.env.JWT_SECRET;

//Handle employee login
async function logIn(req, res, next) {
  try {
    console.log(req.body);
    const employeeData = await loginService.logIn(employeeData);
    //If employee is not found
    if (employeeData.status === "fail") {
      res.status(403).json({
        status: employeeData.status,
        message: employeeData.message,
      });
      //console.log(employee.message)
    }
    //If successful,send a response to the client
    const payload = {
      employee_id: employee.data.employee_id,
      employee_email: employee.data.employee_email,
      employee_role: employee.data.company_role_id,
      employee_first_name: employee.data.employee_first_name,
    };
    const token = jwt.sign(payload, jwtsecret, {
      expiresIn: "24h",
    });
    //console.log(token);
    const sendBack = {
      employee_token: token,
    };
    res.status(200).json({
      status: "success",
      message: "Employee logged in successfully",
      data: sendBack,
    });
  } catch (error) {}
}
