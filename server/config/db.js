const mongoose = require('mongoose');

const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log('Database connected');
    }

    catch{
        console.log('FAILED TO CONNECT TO DATABASE!!!!');
    }
}

module.exports = connectDB;