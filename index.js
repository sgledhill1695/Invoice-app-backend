const express = require('express');
const connectDB = require('./server/config/db');
require('dotenv').config();
const invoices = require('./server/routes/invoices');
var cors = require('cors');


connectDB();//Run the connect db function from congif/db file


const app = express();
const port = 5000;

app.use(cors()) // allow cors requests
app.use(express.json()); //parse request body middleware
app.use('/invoices', invoices); //Invoices routes



app.listen(port, () => {

    console.log(`Invoice app api listening on port ${port}`);

});