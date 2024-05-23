require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const connectDB =async () => {

    return mongoose.connect(uri,{}).then(() => console.log("connection successful")).catch((err) => console.log(err));

};

module.exports = connectDB;