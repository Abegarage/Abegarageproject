 //Import the query function from the db.config.js file 
 const conn = require("../config/db.config");
 //Import the bcrypt module 
 const bcrypt = require('bcrypt');
 // A function to check if service exists in the database 
 async function checkIfServiceExists(service_name) {
   const query = "SELECT * FROM common_services WHERE service_name = ? ";
   const rows = await conn.query(query, [service_name]);
   console.log(rows);
   if (rows.length > 0) {
     return true;
   }
   return false;
 }
 // A function to create a new employee 
 async function createService(service) {
   let createdService = {};
   try {

     // Insert in to common services  
     const query = "INSERT INTO common_services (service_name, service_description) VALUES (?,?)";
     const rows = await conn.query(query, [service.service_name, service.service_description]);
     console.log(rows);
     if (rows.affectedRows !== 1) {
       return false;
     }
     // Get the employee id from the insert 
     const service_id = rows.insertId;
     // construct to the employee object to return 
     createdService = {
       service_id: service_id
     }
   } catch (err) {
     console.log(err);
   }
   // Return the employee object 
   return createdService;
  }
  module.exports = {
    checkIfServiceExists,
    createService
  }