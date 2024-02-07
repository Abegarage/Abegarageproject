

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
//import environment variables from .env file
const port = process.env.PORT;

app.use(cors());
//import the dbConfig file
const dbConnection = require("./config/dbConfig");

//connect to database
async function connectToDatabase() {
    try {
      await dbConnection.getConnection();
      console.log('Connected to the database!');
    } catch (err) {
      console.error('Error connecting to the database:', err);
    }
  }
connectToDatabase();

//start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

});


