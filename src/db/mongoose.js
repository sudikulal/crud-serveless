const mongoose = require("mongoose");

const { MONGO_URI } = require("../config/config");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
