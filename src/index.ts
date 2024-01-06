const handlers = {
  create: require("./functions/createUser").handler,
  read: require("./functions/listUser").handler,
  update: require("./functions/updateUser").handler,
  delete: require("./functions/deleteUser").handler,
};

module.exports = handlers;
