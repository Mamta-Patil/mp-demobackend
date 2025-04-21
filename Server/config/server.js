const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

// const connection = mongoose.connect(process.env.MONGODBURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const connection=mongoose.connect(process.env.MONGODBURL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


module.exports = connection;