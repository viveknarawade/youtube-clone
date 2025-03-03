const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
     console.log(`${MONGODB_URL}/${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`)

        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR: Mongodb Connection failed", error.message);
        process.exit(1); 
    }
};

module.exports = { connectDB };
