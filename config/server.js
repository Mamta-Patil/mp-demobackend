// const mongoose = require("mongoose");
// require("dotenv").config(); // Load environment variables
// const connection=mongoose.connect(process.env.MONGODBURL)
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.error("MongoDB connection error:", err));


// module.exports = connection;
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
    return connection;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err; // Propagate error to index.js
  }
};

module.exports = connectDB();
