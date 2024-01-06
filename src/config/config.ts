require("dotenv").config();

const { MONGO_URI } = process.env;

module.exports = {
  MONGO_URI,
};
