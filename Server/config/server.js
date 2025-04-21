const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connection = mongoose.connect(process.env.MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;