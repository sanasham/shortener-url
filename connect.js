const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
  try {
    console.log('url connect', process.env.CONNECTION_STRING);
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      'database connected:',
      connect.connection.host,
      connect.connection.port,
      connect.connection.name
    );
  } catch (error) {
    console.log('connection error', error);
    process.exit(1);
  }
};

module.exports = connectDB;
