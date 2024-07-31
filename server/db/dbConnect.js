require("dotenv").config();
const mongoose = require("mongoose");

async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connected to the ultra MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;
