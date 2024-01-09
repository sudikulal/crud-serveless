const readUSer = require("../../functions/listUser");

exports.shouldRead = async () => {
  const event = {
    body: {},
  };

  try {
    const res = await readUSer.handler(event);
    expect(res.statusCode).toEqual(200);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
