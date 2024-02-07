// const express = require('express')
// const app = express()
// const cors = require('cors')
// require('dotenv').config();

// const port = process.env.PORT

// app.use(cors());

// const dbConnection = require("./config/dbConfig.js");

// dbConnection.connect((err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("connected to db");
//     }
// })
// app.listen(port, ()=>{
//     console.log(`listening on port ${port}`);
// })
// async function start() {
//     try {
//       const result =  await dbConnection.execute("select * from users");
//       app.listen(port)
//      console.log(`listeting on port ${port}`);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// start();
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
app.use(cors());
const dbConnection = require("./config/dbConfig");

//Set up the listener - Creating the webserver
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//Create the connection to the database
async function connectToDatabase() {
  try {
    await dbConnection.getConnection();
    console.log("Connected to the database!");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}
connectToDatabase();
