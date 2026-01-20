const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI;

const mongoConnect = () => {
  //Mongoose / MongoDB Connection
  mongoose
    .connect(uri)
    .then(() =>
      console.log("[ Connection Established ] Database is Ready for Use.")
    )
    .catch((err) => console.error("[ Connection error ] Check URI provided.", err));
};

module.exports = mongoConnect