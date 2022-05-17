const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();

// routes
const userRoute = require('./routes/User');


// middleware
app.use('user', userRoute);
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
require('dotenv').config();


// connect to the database
const DB_URL = process.env.DATABASE_URL;
mongoose.connect(DB_URL);
const connection = mongoose.connection;

connection.once('open', () =>{
  console.log('Application connected to the Database successfully!');
})

// port
const PORT = process.env.PORT || 9000;


// listen to the port

app.listen(() =>{
  console.log(`Application is listening on port ${PORT}`);
});