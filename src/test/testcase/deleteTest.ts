const deleteUser = require("../../functions/deleteUser");

exports.shouldDelete = async (userId: String) => {
  const event = {
    body: {
      user_id: userId,
    },
  };

  try {
    const res = await deleteUser.handler(event);
    expect(res.statusCode).toEqual(200);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.shouldNotDelete = async () => {
  const event = {
    body: {},
  };

  try {
    const res = await deleteUser.handler(event);
    expect(res.statusCode).not.toEqual(200);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
