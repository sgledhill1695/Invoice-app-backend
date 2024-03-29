const mongoose = require('mongoose');

const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log('Database connected');
    }

    catch (err){
        console.log('FAILED TO CONNECT TO DATABASE!!!!');
        console.log(err)
    }
}

module.exports = connectDB;